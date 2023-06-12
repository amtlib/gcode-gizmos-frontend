import { useMutation, useQuery } from "@apollo/client";
import { useContext } from "react";
import { ModelContext } from "../contexts/ModelContext";
import { UserContext } from "../contexts/UserContext";
import { CreateComment, CreateModel, DeleteModel, ModelsQuery, RateModel, UpdateModel } from "../graphql/operations/models";
import { debounce } from "debounce";

async function createFileArray(urls: string[]): Promise<File[]> {
    const fileArray: File[] = [];

    for (const url of urls) {
        const response = await fetch(url, {cache: "no-cache"});
        const blob = await response.blob();
        const fileName = getFileNameFromUrl(url);
        const file = new File([blob], fileName);
        fileArray.push(file);
    }

    return fileArray;
}

function getFileNameFromUrl(url: string): string {
    const pathSegments = url.split('/');
    return pathSegments[pathSegments.length - 1];
}

export function ModelContainer({ children }) {
    const [createModelMutation, { loading: createModelLoading }] = useMutation(CreateModel, { refetchQueries: ["Models"] });
    const [updateModelMutation, { loading: updateModelLoading }] = useMutation(UpdateModel, { refetchQueries: ["Model"] });
    const [rateModelMutation, { loading: rateModelLoading }] = useMutation(RateModel, { refetchQueries: ["Model"] });
    const [deleteModelMutation, { loading: deleteModelLoading }] = useMutation(DeleteModel, { refetchQueries: ["Models"] });
    const [createCommentMutation, { loading: createCommentLoading }] = useMutation(CreateComment, { refetchQueries: ["Model"] });
    const { data: dataModels, loading: modelsLoading, refetch: refetchModels } = useQuery(ModelsQuery);
    const { username } = useContext(UserContext);

    const setSearchQuery = debounce((newQuery: string) => {
        refetchModels({ query: newQuery })
    }, 500)

    const createModel = async (name: string, description: any, files: File[], images: File[], recommendedInfill: number, recommendedMaterial: string, supports: string) => {
        const result = await createModelMutation({
            variables: {
                data: {
                    name,
                    description,
                    images: { create: [...Array.from(images).map(image => ({ image: { upload: image }, createdBy: { connect: { username } } }))] },
                    files: { create: [...Array.from(files).map(file => ({ file: { upload: file }, createdBy: { connect: { username } } }))] },
                    createdBy: { connect: { username } },
                    recommendedInfill,
                    recommendedMaterial,
                    supports
                }
            }
        });

        if (result?.data?.createModel?.slug) {
            return result.data.createModel.slug;
        }
        return null;
    }

    const updateModel = async (slug: string, name: string, description: any, recommendedInfill: number, recommendedMaterial: 'pla' | 'abs' | 'pet' | 'tpe', supports: 'yes' | 'no' | 'n/a', images: File[], files: File[]) => {
        let imagesToUnlink = [], filesToUnlink = [];
        if (images.length > 0) {
            imagesToUnlink = dataModels.models.find(model => model.slug === slug).images.map(image => image.id);
        }
        if (files.length > 0) {
            filesToUnlink = dataModels.models.find(model => model.slug === slug).files.map(file => file.id);
        }

        const result = await updateModelMutation({
            variables: {
                slug,
                data: {
                    name,
                    description,
                    images: images.length ? { disconnect: [...imagesToUnlink.map(id => ({ id }))], create: [...Array.from(images).map(image => ({ image: { upload: image }, createdBy: { connect: { username } } }))] } : undefined,
                    files: files.length ? { disconnect: [...filesToUnlink.map(id => ({ id }))], create: [...Array.from(files).map(file => ({ file: { upload: file }, createdBy: { connect: { username } } }))] } : undefined,
                    recommendedInfill,
                    recommendedMaterial,
                    supports
                }
            }
        });

        if (result?.data?.updateModel?.slug) {
            return result.data.updateModel.slug;
        }
        return null;
    }

    const deleteModel = async (slug: string) => {
        const result = await deleteModelMutation({
            variables: {
                slug
            }
        });

        if (result.errors) {
            return false;
        }
        if (result.data?.deleteModel) {
            return true;
        }
        return false;
    }

    const createRemix = async (slug: string) => {
        const { name, description, files, images, recommendedInfill, recommendedMaterial, supports } = dataModels.models.find(model => model.slug === slug);
        const filesList = await createFileArray(files.map(file => file.file.url));
        const imagesList = await createFileArray(images.map(image => image.image.url));
        const newModelSlug = await createModel(name, description.document, filesList, imagesList, recommendedInfill, recommendedMaterial, supports);
        return newModelSlug;
    }

    const createComment = async (slug: string, content: any) => {
        const result = await createCommentMutation({
            variables: {
                data: {
                    author: {
                        connect: {
                            username
                        }
                    },
                    model: {
                        connect: {
                            slug
                        }
                    },
                    content
                }
            }
        });

        if (result?.data?.createComment?.id) {
            return result.data.createComment.id;
        }
        return null;
    }

    const rateModel = async (slug: string, score: number) => {
        const result = await rateModelMutation({
            variables: {
                score,
                slug
            }
        });
        return result.data.rateModel;
    }

    return <ModelContext.Provider value={{
        models: dataModels?.models || [],
        modelsLoading,
        createModel,
        updateModel,
        deleteModel,
        createComment,
        createModelLoading,
        deleteModelLoading,
        updateModelLoading,
        createCommentLoading,
        setSearchQuery,
        createRemix,
        rateModel
    }}>{children}</ModelContext.Provider>
}
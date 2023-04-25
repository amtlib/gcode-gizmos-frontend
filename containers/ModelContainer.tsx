import { useMutation, useQuery } from "@apollo/client";
import { useContext } from "react";
import { ModelContext } from "../contexts/ModelContext";
import { UserContext } from "../contexts/UserContext";
import { CreateComment, CreateModel, DeleteModel, ModelsQuery, UpdateModel } from "../graphql/operations/models";


export function ModelContainer({ children }) {
    const [createModelMutation, { loading: createModelLoading }] = useMutation(CreateModel, { refetchQueries: ["Models"] });
    const [updateModelMutation, { loading: updateModelLoading }] = useMutation(UpdateModel, { refetchQueries: ["Model"] });
    const [deleteModelMutation, { loading: deleteModelLoading }] = useMutation(DeleteModel, { refetchQueries: ["Models"] });
    const [createCommentMutation, { loading: createCommentLoading }] = useMutation(CreateComment, { refetchQueries: ["Model"] });
    const { data: dataModels, loading: modelsLoading } = useQuery(ModelsQuery);
    const { username } = useContext(UserContext);

    const createModel = async (name: string, description: any, files: File[], images: File[], recommendedInfill: number, recommendedMaterial: 'pla' | 'abs' | 'pet' | 'tpe', supports: 'yes' | 'no' | 'n/a') => {
        const result = await createModelMutation({
            variables: {
                data: {
                    name,
                    description,
                    images: { create: [...Array.from(images).map(image => ({ image: { upload: image}, createdBy: {connect: {username}}}))]},
                    files: { create: [...Array.from(files).map(file => ({ file: { upload: file}, createdBy: {connect: {username}}}))]},
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

    const updateModel = async (slug: string, name: string, description: any, recommendedInfill: number, recommendedMaterial: 'pla' | 'abs' | 'pet' | 'tpe', supports: 'yes' | 'no' | 'n/a') => {
        const result = await updateModelMutation({
            variables: {
                slug,
                data: {
                    name,
                    description,
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
        createCommentLoading
    }}>{children}</ModelContext.Provider>
}
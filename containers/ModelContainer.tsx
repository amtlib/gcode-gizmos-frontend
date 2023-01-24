import { useMutation } from "@apollo/client";
import { ModelContext } from "../contexts/ModelContext";
import { CreateModel, DislikeModel, LikeModel } from "../graphql/operations/models";


export function ModelContainer({ children }) {
    const [createModelMutation, { data: createModelData, loading: createModelLoading}] = useMutation(CreateModel);
    const [likeModelMutation, { data: likeModelData, loading: likeModelLoading}] = useMutation(LikeModel);
    const [dislikeModelMutation, { data: dislikeModelData, loading: dislikeModelLoading}] = useMutation(DislikeModel);

    const createModel = async (name: string, description: string, modelFile: File, modelImage: File) => {
        const result = await createModelMutation({ variables: {
            data: {
                name,
                description,
                modelFile: {upload: modelFile},
                modelImage: {upload: modelImage}
            }
        }});

        if (result?.data?.createModel?.slug) {
            return result.data.createModel.slug;
        }
        return null;
    }

    const likeModel = async (modelSlug: string, username: string) => {
        const result = await likeModelMutation({ variables: {
            modelSlug,
            username
        }});
        if (result?.data?.updateModel) {
            return true;
        }
        return false;
    }

    const dislikeModel = async (modelSlug: string, username: string) => {
        const result = await dislikeModelMutation({ variables: {
            modelSlug,
            username
        }});
        if (result?.data?.updateModel) {
            return true;
        }
        return false;
    }

    return <ModelContext.Provider value={{
        createModel,
        likeModel,
        dislikeModel
    }}>{children}</ModelContext.Provider>
}
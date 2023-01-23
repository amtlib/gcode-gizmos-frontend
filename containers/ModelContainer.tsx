import { useMutation } from "@apollo/client";
import { ModelContext } from "../contexts/ModelContext";
import { CreateModel } from "../graphql/operations/models";


export function ModelContainer({ children }) {
    const [createModelMutation, { data: createModelData, loading: createModelLoading}] = useMutation(CreateModel);

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

    return <ModelContext.Provider value={{
        createModel
    }}>{children}</ModelContext.Provider>
}
import { useMutation, useQuery } from "@apollo/client";
import { useContext, useMemo } from "react";
import { ModelContext } from "../contexts/ModelContext";
import { UserContext } from "../contexts/UserContext";
import { CreateModel, DeleteModel, ModelsQuery, UpdateModel } from "../graphql/operations/models";


export function ModelContainer({ children }) {
    const [createModelMutation, { loading: createModelLoading }] = useMutation(CreateModel, { refetchQueries: ["Models"]});
    const [updateModelMutation, { loading: updateModelLoading }] = useMutation(UpdateModel, { refetchQueries: ["Model"]});
    const [deleteModelMutation, { loading: deleteModelLoading }] = useMutation(DeleteModel, { refetchQueries: ["Models"]});
    const {data: dataModels, loading: modelsLoading} = useQuery(ModelsQuery);
    const { username } = useContext(UserContext);

    const createModel = async (name: string, description: string, modelFile: File, modelImage: File, recommendedInfill: number, recommendedMaterial: 'pla' | 'abs' | 'pet' | 'tpe', supports: 'yes' | 'no' | 'n/a') => {
        const result = await createModelMutation({
            variables: {
                data: {
                    name,
                    description,
                    modelFile: { upload: modelFile },
                    modelImage: { upload: modelImage },
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

    const updateModel = async (slug: string, name: string, description: string, recommendedInfill: number, recommendedMaterial: 'pla' | 'abs' | 'pet' | 'tpe', supports: 'yes' | 'no' | 'n/a') => {
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
        const result = await deleteModelMutation({variables: {
            slug
        }});

        if (result.errors) {
            return false;
        }
        if (result.data?.deleteModel) {
            return true;
        }
        return false;
    }

    return <ModelContext.Provider value={{
        models: dataModels?.models || [],
        modelsLoading,
        createModel,
        updateModel,
        deleteModel,
        createModelLoading,
        deleteModelLoading,
        updateModelLoading
    }}>{children}</ModelContext.Provider>
}
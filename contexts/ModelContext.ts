import { createContext } from "react";

export type ModelType = {
    __typename?: "Model";
    id: string;
    name?: string;
    description?: string;
    slug?: string;
    doUserLikesIt?: boolean;
    modelImage?: {
        __typename?: "ImageFieldOutput";
        url: string;
    };
}

export type ModelContextType = {
    models: ModelType[];
    modelsLoading: boolean;
    createModel: (name: string, description: string, modelFile: File, modelImage: File, recommendedInfill: number, recommendedMaterial: 'pla' | 'abs' | 'pet' | 'tpe', supports: 'yes' | 'no' | 'n/a') => Promise<string | null>;
    updateModel: (slug: string, name: string, description: string, recommendedInfill: number, recommendedMaterial: 'pla' | 'abs' | 'pet' | 'tpe', supports: 'yes' | 'no' | 'n/a') => Promise<string | null>;
    deleteModel: (slug: string) => Promise<boolean>;
    createModelLoading: boolean;
    updateModelLoading: boolean;
    deleteModelLoading: boolean;
};

export const ModelContext = createContext<ModelContextType>({
    models: [],
    modelsLoading: false,
    createModel: () => Promise.resolve(null),
    updateModel: () => Promise.resolve(null),
    deleteModel: () => Promise.resolve(false),
    createModelLoading: false,
    updateModelLoading: false,
    deleteModelLoading: false,
});

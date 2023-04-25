import { createContext } from "react";

export type ModelType = {
    __typename?: "Model";
    id: string;
    name?: string;
    description?: string;
    slug?: string;
    doUserLikesIt?: boolean;
    images?: {
        image: {
            url: string;
        }
    }[];
}

export type ModelContextType = {
    models: ModelType[];
    modelsLoading: boolean;
    createModel: (name: string, description: string, files: File[], images: File[], recommendedInfill: number, recommendedMaterial: 'pla' | 'abs' | 'pet' | 'tpe', supports: 'yes' | 'no' | 'n/a') => Promise<string | null>;
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

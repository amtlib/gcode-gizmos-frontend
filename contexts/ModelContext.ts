import { createContext } from "react";

export type ModelType = {
    __typename?: "Model";
    id: string;
    name?: string;
    description?: any;
    slug?: string;
    doUserLikesIt?: boolean;
    recommendedInfill?: number;
    ratingsAvg?: number;
    userRating?: number;
    createdBy?: {
        username?: string
    };
    images?: {
        image?: {
            url?: string;
        }
    }[];
}

export type ModelContextType = {
    models: ModelType[];
    modelsLoading: boolean;
    createModel: (name: string, description: any, files: File[], images: File[], recommendedInfill: number, recommendedMaterial: 'pla' | 'abs' | 'pet' | 'tpe', supports: 'yes' | 'no' | 'n/a') => Promise<string | null>;
    updateModel: (slug: string, name: string, description: any, recommendedInfill: number, recommendedMaterial: 'pla' | 'abs' | 'pet' | 'tpe', supports: 'yes' | 'no' | 'n/a', images: File[], files: File[]) => Promise<string | null>;
    deleteModel: (slug: string) => Promise<boolean>;
    createComment: (slug: string, content: any) => Promise<string | null>;
    createModelLoading: boolean;
    updateModelLoading: boolean;
    deleteModelLoading: boolean;
    createCommentLoading: boolean;
    setSearchQuery: (query: string | null) => void;
    createRemix: (slug: string) => Promise<String>;
    rateModel: (slug: string, score: number) => Promise<Boolean>
};

export const ModelContext = createContext<ModelContextType>({
    models: [],
    modelsLoading: false,
    createModel: () => Promise.resolve(null),
    updateModel: () => Promise.resolve(null),
    deleteModel: () => Promise.resolve(false),
    createComment: () => Promise.resolve(null),
    createModelLoading: false,
    updateModelLoading: false,
    deleteModelLoading: false,
    createCommentLoading: false,
    setSearchQuery: () => {},
    createRemix: () => Promise.resolve(""),
    rateModel: () => Promise.resolve(false)
});

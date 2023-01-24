import { createContext } from "react";

export type ModelContextType = {
    createModel: (name: string, description: string, modelFile: File, modelImage: File) => Promise<string | null>;
    likeModel: (modelSlug: string, username: string) => Promise<boolean>;
    dislikeModel: (modelSlug: string, username: string) => Promise<boolean>;
};

export const ModelContext = createContext<ModelContextType>({
    createModel: () => Promise.resolve(null),
    likeModel: () => Promise.resolve(false),
    dislikeModel: () => Promise.resolve(false),
});

import { createContext } from "react";

export type ModelContextType = {
    createModel: (name: string, description: string, modelFile: File, modelImage: File) => Promise<string | null>
};

export const ModelContext = createContext<ModelContextType>({
    createModel: () => Promise.resolve(null)
});

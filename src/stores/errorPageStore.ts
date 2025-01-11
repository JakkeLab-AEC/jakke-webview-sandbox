import { create } from "zustand";

interface ErrorPageStoreProps {
    message: string,
    setErrorMessage: (message: string) => void,
}

export const useErrorPageStore = create<ErrorPageStoreProps>((set) => ({
    message: "No message.",
    setErrorMessage: (message: string) => {
        set(() => {
            return {
                message: message
            }
        })
    }
}));
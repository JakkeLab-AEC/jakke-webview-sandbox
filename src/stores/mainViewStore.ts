import { ReactNode } from "react";
import { create } from "zustand";

interface MainViewStoreProps {
    registeredPages: Map<string, ReactNode>;
    currentPage?: ReactNode;
    navigatePage: (registerdPageId: string) => void;
    registerPage: (pageId: string, page: ReactNode) => void;
}

export const useMainViewStore = create<MainViewStoreProps>((set, get) => {
    return {
        registeredPages: new Map(),
        navigatePage: (registerdPageId: string) => {
            const page = get().registeredPages.get(registerdPageId);
            if(page) {
                set(() => {
                    return {
                        currentPage: page
                    }
                })
            }
        },
        registerPage: (pageId: string, page: ReactNode) => {
            const updatedPages = new Map(get().registeredPages);
            updatedPages.set(pageId, page);
            set(() => {
                return {
                    registeredPages: updatedPages
                }
            })
        }
    }
});
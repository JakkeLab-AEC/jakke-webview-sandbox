import { ReactNode } from "react";
import { create } from "zustand";
import { HostSocket } from "../api/socket";

interface MainViewStoreProps {
    registeredPages: Map<string, ReactNode>;
    currentPage?: ReactNode;
    hostSocket: HostSocket;
    navigatePage: (registerdPageId: string) => void;
    registerPage: (pageId: string, page: ReactNode) => void;
    initializePage: () => void;
}

export const useMainViewStore = create<MainViewStoreProps>((set, get) => {
    return {
        registeredPages: new Map(),
        hostSocket: new HostSocket(),
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
        },
        initializePage: () => {
            const idlePage = get().registeredPages.get("idle");
            if(idlePage) {
                set(() => {
                    return {
                        currentPage: idlePage
                    }
                })
            } else {
                set(() => {
                    return {
                        currentPage: get().registeredPages.get("error")
                    }
                })
            }
        }
    }
});
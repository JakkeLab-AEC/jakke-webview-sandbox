import { ReactNode } from "react";
import { create } from "zustand";
import { HostSocket } from "../api/socket";

interface MainViewStoreProps {
    registeredPages: Map<string, ReactNode>;
    currentPage?: ReactNode;
    hostSocket: HostSocket;
    statusMessage: string;
    navigatePage: (registerdPageId: string) => void;
    registerPage: (pageId: string, page: ReactNode) => void;
    initializePage: () => void;
    setStatusMessage: (message: string) => void;
}

export const useMainViewStore = create<MainViewStoreProps>((set, get) => {
    return {
        registeredPages: new Map(),
        hostSocket: HostSocket.instance,
        statusMessage: "Idle",
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
        },
        setStatusMessage: (message: string) => {
            set(() => {
                return {
                    statusMessage: message
                }
            })
        }
    }
});
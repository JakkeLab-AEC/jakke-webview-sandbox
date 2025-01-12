import { useEffect } from "react";
import { useMainViewStore } from "../../stores/mainViewStore"
import { ButtonDefault } from "../buttons/buttonDefault"

export const Header = () => {
    const {
        hostSocket,
        statusMessage,
        navigatePage,
        setStatusMessage,
    } = useMainViewStore();

    const nagivatePageToTextArea = () => {
        navigatePage("textArea");
    }

    const nagivatePageToIdle = () => {
        navigatePage("idle");
    }

    const connectToSocket = () => {
        hostSocket.host = "ws://localhost:8080";
        hostSocket.connect();
    }

    const disconnectToSocket = () => {
        hostSocket.disconnect();
    }

    const onUpdateStatus = (ev: unknown) => {
        if(ev) {
            setStatusMessage(ev.toString());
        }
    }

    useEffect(() => {
        hostSocket.registerMessageHandler("headerUpdater", onUpdateStatus);
    });

    return (
        <div className="flex flex-row bg-blue-400 h-[48px] items-center gap-2">
            <div className="flex flex-row gap-2">
                <div className="p-1">
                    Jakke Webview Sandbox
                </div>
                <div className="bg-white p-1 rounded">
                    {statusMessage}
                </div>
            </div>
            <div className="flex flex-row gap-2">
                <ButtonDefault text={"TextArea"} isEnabled={true} onClickHandler={nagivatePageToTextArea} />
                <ButtonDefault text={"Idle"} isEnabled={true} onClickHandler={nagivatePageToIdle} />
                <ButtonDefault text={"Connect Socket"} isEnabled={true} onClickHandler={connectToSocket} />
                <ButtonDefault text={"Disconnect Socket"} isEnabled={true} onClickHandler={disconnectToSocket} />
            </div>
        </div>
    )
}

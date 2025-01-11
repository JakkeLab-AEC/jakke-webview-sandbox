import { useMainViewStore } from "../../stores/mainViewStore"
import { ButtonDefault } from "../buttons/buttonDefault"

export const Header = () => {
    const {
        navigatePage
    } = useMainViewStore();

    const nagivatePageToTextArea = () => {
        navigatePage("textArea");
    }

    const nagivatePageToIdle = () => {
        navigatePage("idle");
    }

    return (
        <div className="flex flex-row bg-blue-400 h-[48px] items-center gap-2">
            <div>
                Jakke Webview Sandbox
            </div>
            <div className="flex flex-row gap-2">
                <ButtonDefault text={"TextArea"} isEnabled={true} onClickHandler={nagivatePageToTextArea} />
                <ButtonDefault text={"Idle"} isEnabled={true} onClickHandler={nagivatePageToIdle} />
            </div>
        </div>
    )
}

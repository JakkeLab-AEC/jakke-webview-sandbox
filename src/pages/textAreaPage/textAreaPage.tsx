import { ChangeEvent, useState } from "react";
import { useMainViewStore } from "../../stores/mainViewStore";

export const TextAreaPage: React.FC = () => {
    const [currentMessage, setMessage] = useState<string>('');
    const {
        hostSocket
    } = useMainViewStore();

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        hostSocket.sendMessage(currentMessage);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" name="message" className="border" onChange={onChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

import { useErrorPageStore } from "../../stores/errorPageStore"

export const ErrorPage:React.FC = () => {
    const {
        message
    } = useErrorPageStore();
    return (
        <div>
            {message}
        </div>
    )
}

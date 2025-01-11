interface ErrorPageProps {
    message: string
}

export const ErrorPage:React.FC<ErrorPageProps> = ({message}) => {
    return (
        <div>
            {message}
        </div>
    )
}

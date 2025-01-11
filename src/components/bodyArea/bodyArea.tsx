import { ReactNode } from "react"

interface BodyAreaProps {
    children?: ReactNode
}

export const BodyArea:React.FC<BodyAreaProps> = ({children}) => {
    return (
        <div>
            {children}
        </div>
    )
}

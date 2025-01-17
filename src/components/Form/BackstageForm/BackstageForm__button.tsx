import { Button } from "react-bootstrap";

//type
import { ButtonVariant } from "react-bootstrap/esm/types";

interface BackstageFormButtonProps {
    type: "submit" | "reset" | "button"
    onClick?: () => void
    disabled?: boolean
    content?: string
    variant?: ButtonVariant
}

const BackstageFormButton: React.FC<BackstageFormButtonProps> = (props) => {

    const { type, onClick, disabled, content, variant } = props

    return (
        <Button
            type={type}
            className="w-100 mt-3"
            onClick={onClick}
            disabled={disabled}
            variant={variant}
        >
            {content}
        </Button>
    )
}

export default BackstageFormButton
import { Form } from "react-bootstrap";

// type
import { ContactUsFormProps } from "../../../types/ContactUsFormProps";

const ContactUsFormGroup: React.FC<ContactUsFormProps> = (props) => {

    const { controlId, label, type, placeholder } = props

    return (
        <Form.Group className="mb-3" controlId={controlId}>
            <Form.Label>{label}</Form.Label>
            <Form.Control type={type} placeholder={placeholder} />
        </Form.Group>
    )
}

export default ContactUsFormGroup
import { Form } from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel';

// type
import { ContactUsFormProps } from "../../../types/ContactUsFormProps";

const ContactUsFormGroup: React.FC<ContactUsFormProps> = (props) => {

    const { controlId, label, type, placeholder, as } = props

    return (
        <FloatingLabel controlId={controlId} label={label} className="mb-3">
            <Form.Control type={type} placeholder={placeholder} as={as ? as : 'input'} />
        </FloatingLabel>
    )
}

export default ContactUsFormGroup
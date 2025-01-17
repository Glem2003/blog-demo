import { Form, Button, Card } from "react-bootstrap";
import ContactUsFormGroup from "./ContactUsForm__group";

// data
import { BlogGroupConfig } from '../../../data/blogGroupConfig'

const ContactUsForm: React.FC = () => {
    return (
        <Card className="p-4 shadow">
            <Card.Body>
                <Card.Title className="text-center">Contact Us</Card.Title>
                <Card.Text className="text-center">
                    If you have any questions, let us know by filling out the form below!
                </Card.Text>

                <Form>
                    {BlogGroupConfig.map((item, index) => {
                        return <ContactUsFormGroup key={index} {...item} />
                    })}
                    <Button type="submit" className="w-100 mt-3" variant="primary">
                        Submit
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default ContactUsForm
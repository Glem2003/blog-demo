import DefaultPage from "../components/common/defaultPage";
import ContactUsForm from "../components/Form/ContactUsForm/ContactUsForm";
import { Container, Row, Col } from "react-bootstrap";

const ContactUsPage: React.FC = () => {
    return (
        <DefaultPage>
            <h3 className="text-center">Get in Touch</h3>
            <Container className="my-5">
                <Row className="justify-content-center">
                    <Col md={8}>
                        <ContactUsForm />
                    </Col>
                </Row>
            </Container>
        </DefaultPage>
    )
}

export default ContactUsPage
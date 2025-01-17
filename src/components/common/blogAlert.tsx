import { useEffect } from "react"
import Modal from 'react-bootstrap/Modal';

//type
import { BlogAlertProps } from "../../types/BlogAlertProps";

const BlogAlert: React.FC<BlogAlertProps> = (props) => {

    const { title, text, error, show, onHide, background } = props

    useEffect(() => {
    }, [error])

    return (
        <>
            <Modal
                show={show}
                onHide={onHide}
            >
                <Modal.Header closeButton className={background}>
                    <Modal.Title>
                        {title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {text && <p>{text}</p>}
                </Modal.Body>
            </Modal>
        </>
    )
}

export default BlogAlert
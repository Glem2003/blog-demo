// style
import './BlogFooter.sass'

//data
import footerIconItem from '../../data/footer'

//content
import { footerContent as f } from '../../content/index'

import { Container, Row, Col } from 'react-bootstrap'
import Stack from 'react-bootstrap/Stack';

const BlogFooter: React.FC = () => {

    return (
        <footer>
            <Container>
                <Row>
                    <Col>
                        <div className="footer__text">{f.footer.text}</div>
                    </Col>
                    <Col>
                        <Stack direction='horizontal'>
                            {footerIconItem.map(item => {
                                const { customClass, content } = item
                                return <div className={`footer__icon ${customClass !== null ? customClass : ''}`}>{content}</div>
                            })}
                        </Stack>
                    </Col>
                </Row>

            </Container>
        </footer >
    )
}

export default BlogFooter
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
                        <Stack direction='horizontal' className='justify-content-end'>
                            {footerIconItem.map(item => {
                                const { customClass, content, link } = item
                                return (
                                    <a href={link != null ? link : '/#!'}>
                                        <div className={`footer__icon ${customClass !== null ? customClass : ''}`}>{content}</div>
                                    </a>
                                )
                            })}
                        </Stack>
                    </Col>
                </Row>

            </Container>
        </footer >
    )
}

export default BlogFooter
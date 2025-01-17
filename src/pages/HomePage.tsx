import { Link } from "react-router-dom";
import { Card, Button, Container } from "react-bootstrap"
import ListGroup from 'react-bootstrap/ListGroup';
import DefaultPage from "../components/common/defaultPage"
import BlogAlert from "../components/common/blogAlert";
import Loading from "../components/common/loading";

// hook
import useAlertShow from "../hooks/useAlertShow";
import { useFetchArticles } from "../hooks/useFetchArticle"

// content
import { homeContent } from "../content";

// config
import { ARTICLES_API_URL } from "../config";

const HomePage: React.FC = () => {

    const { data: article, loading, error } = useFetchArticles(ARTICLES_API_URL)
    const lastArticles = (article || []).slice(-3)

    const { show, handleClose } = useAlertShow({ isError: error })

    // data
    const { Hero_Section, Latest_Posts, Categories, About_Us, Contact_Us } = homeContent

    return (
        <DefaultPage>
            {loading ? (
                <Loading />
            ) : (
                <Container>
                    <BlogAlert
                        title="Error"
                        text={error}
                        error={error}
                        show={show}
                        onHide={handleClose}
                        background="bg-danger"
                    />
                    <Card className="border-0 my-4">
                        <Card.Body className="d-grid gap-3">
                            <h2 className="text-center">{Hero_Section.title}</h2>
                            <h3 className="text-center">{Hero_Section.subtitle}</h3>
                            <Link to={'/blog'}>
                                <Button variant="outline-secondary" size="lg" className="w-100">
                                    {Hero_Section.button_text}
                                </Button>
                            </Link>
                        </Card.Body>
                    </Card>

                    <Card className="my-4">
                        <Card.Body className="d-grid gap-3">
                            <Card.Title className="text-center">{Latest_Posts.title}</Card.Title>
                            <ListGroup numbered>
                                {lastArticles.map((item, index) => {
                                    return <ListGroup.Item key={index}>{item.title}</ListGroup.Item>
                                })}
                            </ListGroup>
                        </Card.Body>
                    </Card>

                    <Card className="my-4">
                        <Card.Body className="d-grid gap-3">
                            <Card.Title className="text-center">{Categories.title}</Card.Title>
                            <ListGroup>
                                {lastArticles.map((item, index) => {
                                    return <ListGroup.Item variant="secondary" className="text-center" key={index}>{item.type.toUpperCase()}</ListGroup.Item>
                                })}
                            </ListGroup>
                        </Card.Body>
                    </Card>

                    <Card className="my-4">
                        <Card.Body className="d-grid gap-3">
                            <Card.Title className="text-center">{About_Us.title}</Card.Title>
                            <Card.Text className="text-center">{About_Us.text}</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="my-4">
                        <Card.Body className="d-grid gap-3">
                            <Card.Title className="text-center">{Contact_Us.title}</Card.Title>
                            <Link to={'/contact_us'}>
                                <Button variant="outline-danger" className="w-100">{Contact_Us.button_text}</Button>
                            </Link>
                        </Card.Body>
                    </Card>

                </Container>
            )}
        </DefaultPage>
    )
}

export default HomePage
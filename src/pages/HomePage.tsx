import DefaultPage from "../components/common/defaultPage"
import { Card, Button, Container } from "react-bootstrap"
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from "react-router-dom";

//hook
import useFetchArticle from "../hooks/useFetchArticle"

//content
import { homeContent } from "../content";

const HomePage: React.FC = () => {

    const { articles } = useFetchArticle()
    const lastArticles = articles.slice(-3)

    // data
    const { Hero_Section, Latest_Posts, Categories, About_Us, Contact_Us } = homeContent

    return (
        <DefaultPage>
            <Container>
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
                        {lastArticles.map((item, index) => {
                            return <Card.Text key={index}>{item.title}</Card.Text>
                        })}
                    </Card.Body>
                </Card>
                <Card className="my-4">
                    <Card.Body className="d-grid gap-3">
                        <Card.Title className="text-center">{Categories.title}</Card.Title>
                        <ButtonGroup vertical>
                            {lastArticles.map((item, index) => {
                                return <Button variant="outline-danger" key={index}>{item.type.toUpperCase()}</Button>
                            })}
                        </ButtonGroup>
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
        </DefaultPage>
    )
}

export default HomePage
import DefaultPage from "../components/common/defaultPage"
import { Card, Container } from "react-bootstrap"

//data
import { aboutUsContent } from "../content"
import { aboutUsData } from "../data/aboutUsData"

const AboutUsPage = () => {

    const { Section_title, Section_subtitle } = aboutUsContent.Hero_Section

    return (
        <DefaultPage>
            <h3 className="text-center">{Section_title}</h3>
            <h6 className="text-center">{Section_subtitle}</h6>
            <Container>
                {aboutUsData && aboutUsData.map((item, index) => {
                    return (
                        <Card className="my-4 text-center" key={index}>
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                {item.content !== undefined ?
                                    item.content.map((content, index) => (
                                        <Card.Text key={index}>{content}</Card.Text>
                                    )) : (
                                        <Card.Text>{item.text}</Card.Text>
                                    )}
                            </Card.Body>
                        </Card>
                    )
                })}
            </Container>
        </DefaultPage>
    )
}

export default AboutUsPage
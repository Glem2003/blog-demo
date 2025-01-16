import { useState } from "react"
import { Container, Card, ButtonGroup, Button } from "react-bootstrap"
import DefaultPage from "../components/common/defaultPage"
import BlogAlert from "../components/common/blogAlert"
import BackstageForm from "../components/Form/BackstageForm/BackstageForm"

// util
import upperFirstWord from "../utils/upperFirstWord"

// content
import { backstageContent } from "../content"

// TO DO //
const BackButtonConfig = ['add', 'edit', 'delete']

const BackstagePage = () => {

    const [isActive, setActive] = useState<string | null>(null) // 'add', 'edit', 'delete'

    const handleClick = (value: string) => {
        setActive(value)
    }

    const { AlertContent } = backstageContent

    return (
        <DefaultPage>
            <Container>
                <BlogAlert title={AlertContent.title} text={AlertContent.text} />
                <ButtonGroup className="w-100 mb-4">
                    {BackButtonConfig.map((item) => {
                        return <Button type="button" value={item} onClick={() => handleClick(item)}>{upperFirstWord(item)}</Button>
                    })}
                </ButtonGroup>

                {isActive && (
                    <Card className="mb-4 shadow">
                        <Card.Body>
                            <BackstageForm currentValue={isActive} />
                        </Card.Body>
                    </Card>
                )}

            </Container>
        </DefaultPage>
    )
}

export default BackstagePage
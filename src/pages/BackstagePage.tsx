import { useState } from "react"
import { Container, Card, ButtonGroup, Button } from "react-bootstrap"
import DefaultPage from "../components/common/defaultPage"
import BlogAlert from "../components/common/blogAlert"
import BackstageForm from "../components/Form/BackstageForm/BackstageForm"

// util
import upperFirstWord from "../utils/upperFirstWord"

// content
import { backstageContent } from "../content"

// hook
import useAlertShow from '../hooks/useAlertShow';

//type
import BackButtonConfig from "../data/backButtonConfig"

const BackstagePage = () => {

    const { AlertContent } = backstageContent
    const [isActive, setActive] = useState<string | null>(null) // 'add', 'edit', 'delete'

    const { show, handleClose } = useAlertShow({
        isMessage: AlertContent.text,
    })

    const handleClick = (value: string) => {
        setActive(value)
    }

    return (
        <DefaultPage>

            <BlogAlert
                title={AlertContent.title}
                text={AlertContent.text}
                show={show}
                onHide={handleClose}
                background="bg-info"
            />

            <Container>

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
// hook
import useBackstageForm from "../../../hooks/useBackstageForm";
import useAlertShow from '../../../hooks/useAlertShow';

// components
import { Form, Stack } from "react-bootstrap";
import BlogAlert from "../../common/blogAlert";
import BackstageFormButton from './BackstageForm__button';

// type
import { BackstageFormProps } from "../../../types/BackstageFormProps";

// content
import { backstageContent } from "../../../content";

const BackstageForm: React.FC<BackstageFormProps> = (props) => {

    const { currentValue } = props
    const { error, reset, submit, load, loading: lding } = backstageContent.FormButton

    const {
        handleToggle,
        handleChange,
        handleSubmit,
        handleLoadSearch,
        handleReset,
        Active,
        loading,
        isError,
        setError,
        articles,
        message,
        setMessage,
        formData
    } = useBackstageForm({ currentValue })

    const { show, handleClose } = useAlertShow({
        isError,
        onClearError: () => setError(null),
        isMessage: message,
        onClearMessage: () => setMessage(null)
    })

    const types = new Set((articles || []).flatMap((article) => article.type))
    const typesArray = [...types]

    const alertBackground = (value: string | null) => {
        return value === "Must not be empty !!" || value === 'article not found' ? 'bg-warning' : value === 'succuss' ? 'bg-success' : value === null ? 'bg-white' : 'bg-danger'
    }

    return (
        <>

            <BlogAlert
                title={error}
                text={isError || message}
                error={isError}
                show={show}
                onHide={handleClose}
                background={alertBackground(isError || message)}
            />

            <Form>

                <Form.Group className="mb-3">
                    <Form.Label>Id</Form.Label>
                    <Form.Control
                        type="number"
                        name="id"
                        min={1}
                        placeholder="Enter id"
                        onChange={handleChange}
                        value={formData.id || []}
                        disabled={currentValue === 'add'}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        placeholder="Enter Title"
                        onChange={handleChange}
                        value={formData.title}
                        disabled={currentValue === 'delete'}
                    />
                </Form.Group>

                <Form.Group className="mb-3">

                    <Form.Label>Type</Form.Label>
                    {!Active ? (
                        <Form.Control
                            type="text"
                            name="type"
                            placeholder="Enter Type"
                            onChange={handleChange}
                            value={formData.type}
                            disabled={currentValue === 'delete'}
                        />
                    ) : (
                        <Form.Select
                            name="type"
                            onChange={handleChange}
                            value={formData.type}
                        >
                            <option>--- Select Type ---</option>
                            {typesArray.sort().flatMap((type) => {
                                return <option key={type} value={type}>{type}</option>
                            })}
                        </Form.Select>
                    )}

                    {currentValue !== 'delete' ? (
                        <Form.Check
                            className="mt-2"
                            type="checkbox"
                            label="Use existing"
                            onChange={handleToggle}
                        />
                    ) : (
                        <></>
                    )}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Content</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="content"
                        placeholder="Enter Content"
                        onChange={handleChange}
                        value={formData.content}
                        disabled={currentValue === 'delete'}
                    />
                </Form.Group>

                {currentValue !== 'add' ? (
                    <>
                        <Stack direction="horizontal" gap={3}>
                            <BackstageFormButton
                                type='button'
                                onClick={() => handleLoadSearch(formData.id || 1)}
                                disabled={loading}
                                content={loading ? lding : load}
                            />
                            <BackstageFormButton
                                type="reset"
                                variant="danger"
                                onClick={handleReset}
                                content={reset}
                            />
                        </Stack>

                        <BackstageFormButton
                            type="button"
                            onClick={() => handleSubmit(currentValue)}
                            disabled={formData.created_at ? false : true}
                            content={submit}
                        />
                    </>
                ) : (
                    <>
                        <BackstageFormButton
                            type="reset"
                            variant="danger"
                            onClick={handleReset}
                            content={reset}
                        />
                        <BackstageFormButton
                            type="button"
                            onClick={() => handleSubmit(currentValue)}
                            content={submit}
                        />
                    </>
                )}

            </Form>
        </>
    )
}

export default BackstageForm
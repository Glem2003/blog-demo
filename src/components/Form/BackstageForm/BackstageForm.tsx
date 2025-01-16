// hook
import useBackstageForm from "../../../hooks/useBackstageForm";
import useAlertShow from '../../../hooks/useAlertShow';

// components
import { Form, Stack } from "react-bootstrap";
import BlogAlert from "../../common/blogAlert";
import BackstageFormButton from './BackstageForm__button';

// type
import { BackstageFormProps } from "../../../types/BackstageFormProps";

const BackstageForm: React.FC<BackstageFormProps> = (props) => {

    const { currentValue } = props

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
        formData
    } = useBackstageForm({ currentValue })

    const { show, handleClose } = useAlertShow({
        isError,
        onClearError: () => setError(null)
    })

    const types = new Set((articles || []).flatMap((article) => article.type))
    const typesArray = [...types]

    const alertBackground = (value: string | null) => {
        if (value === "Must not be empty !!") {
            return 'bg-warning'
        } else if (value === 'article not found') {
            return 'bg-warning'
        } else if (value === null) {
            return 'bg-white'
        } else {
            return 'bg-danger'
        }
    }

    return (
        <>

            <BlogAlert
                title="Error"
                text={isError}
                error={isError}
                show={show}
                onHide={handleClose}
                background={alertBackground(isError)}
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
                        value={formData.id || articles?.length}
                        disabled={currentValue === 'add'}
                        required
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
                                content={loading ? 'Loading...' : 'Load'}
                            />
                            <BackstageFormButton
                                type="reset"
                                variant="danger"
                                onClick={handleReset}
                                content='Reset'
                            />
                        </Stack>

                        <BackstageFormButton
                            type="submit"
                            onClick={() => handleSubmit(currentValue)}
                            disabled={formData.created_at ? false : true}
                            content='Submit'
                        />
                    </>
                ) : (
                    <>
                        <BackstageFormButton
                            type="reset"
                            variant="danger"
                            onClick={handleReset}
                            content='Reset'
                        />
                        <BackstageFormButton
                            type="button"
                            onClick={() => handleSubmit(currentValue)}
                            content='Submit'
                        />
                    </>
                )}

            </Form>
        </>
    )
}

export default BackstageForm
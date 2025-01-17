import { useState, useEffect } from "react";
import { AxiosError } from 'axios'

// config
import { ARTICLES_API_URL } from "../config/index";

// hook
import { useFetchArticles } from "../hooks/useFetchArticle";
import {
    getArticle,
    postArticle,
    putArticle,
    deleteArticle
} from "../services/articleService";

// type
import { UseBackstageFormProps } from "../types/HooksProps";

const useBackstageForm = ({ currentValue }: UseBackstageFormProps) => {

    const { data: articles } = useFetchArticles(ARTICLES_API_URL) // articles data
    const [Active, setActive] = useState<boolean>(false) // type checkbox
    const [loading, setLoading] = useState<boolean>(false) // load button

    // TODO //
    const [message, setMessage] = useState<string | null>(null) // data message
    const [isError, setError] = useState<string | null>(null) // error message

    const defaultFormData = () => ({
        id: (articles || []).length + 1 || null,
        title: "",
        type: "",
        content: "",
        updated_at: "",
        created_at: ""
    })

    const [formData, setFormData] = useState(defaultFormData)

    useEffect(() => {
        setFormData(prev => ({
            ...prev,
            id: (articles || []).length + 1
        }));
    }, [articles])

    useEffect(() => {
        const disableCheckbox = (value: string | null) => {
            setActive((prev) => value === 'delete' ? false : prev)
        }

        disableCheckbox(currentValue)
    }, [currentValue])

    const handleToggle = () => {
        setActive(!Active)
    }

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (current: string | null) => {
        try {
            if (current === 'add') {
                if (!formData.title || !formData.type || !formData.content) {
                    setError("Must not be empty !!");
                    return;
                }
                await postArticle(formData);
                setMessage('succuss')
                setFormData(defaultFormData)
            } else if (current === 'edit') {
                await putArticle(formData.id || 1, formData);
                setMessage('succuss')
                setFormData(defaultFormData)
            } else if (current === 'delete') {
                await deleteArticle(formData.id || 1);
                setMessage('succuss')
                setFormData(defaultFormData)
            } else {
                setError("Parameter Error");
                return;
            }
        } catch (error) {
            handleError(error, `Error ${current} article`)
        }
    }

    const handleError = (error: unknown, defaultMessage: string) => {
        if (error instanceof AxiosError) {
            setError(error.response?.data?.message || error.message || defaultMessage);
        } else {
            setError(defaultMessage);
        }
    }

    const handleLoadSearch = async (id: number) => {
        setLoading(!loading)
        try {
            const response = await getArticle(id)

            setFormData({
                id: response.id || id,
                title: response.title || '',
                type: response.type || '',
                content: response.content || '',
                updated_at: response.updated_at || '',
                created_at: response.created_at || ''
            });
        } catch (error) {
            handleError(error, 'Error fetching article')
            setFormData(defaultFormData)
        } finally {
            setLoading(false);
        }
    }

    const handleReset = () => {
        setFormData(defaultFormData)
    }

    return {
        handleToggle,
        handleChange,
        handleSubmit,
        handleLoadSearch,
        handleReset,
        Active,
        loading,
        isError,
        setError,
        message,
        setMessage,
        articles,
        formData
    }

}

export default useBackstageForm
// model
import { useState, useEffect } from 'react';

// type
import { Article } from '../types/BlogArticleProps';

// utils
import fetchApi from '../utils/fetchApi';

const useFetchArticle = () => {

    const [articles, setArticles] = useState<Article[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const loadArticles = async () => {
            try {
                const data = await fetchApi()
                setArticles(data)
            } catch (err: any) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        };

        loadArticles()
    }, [])

    return { articles, loading, error }
}

export default useFetchArticle
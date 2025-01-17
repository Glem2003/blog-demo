// model
import { useState, useEffect } from 'react';

// type
import { Article } from '../types/BlogArticleProps';

// utils
import fetchApi from '../utils/fetchApi';

// Shared utility hook
const useFetch = <T,>(API_URL: string) => {

    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            setError(null)
            try {
                const result = await fetchApi(API_URL)
                setData(result as T)
            } catch (err: any) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        };

        fetchData()
    }, [API_URL])

    return { data, loading, error }
}

export const useFetchArticles = (API_URL: string) => {
    return useFetch<Article[]>(API_URL)
}
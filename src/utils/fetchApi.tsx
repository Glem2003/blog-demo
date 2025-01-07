import { Article } from "../types/BlogArticleProps";

const API_URL = 'https://blog-platform-backend-26rw.onrender.com/api/articles';

const fetchApi: () => Promise<Article[]> = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data = await response.json();
        return data.data;
    } catch (error: any) {
        console.log("Error fetching API:", error.message)
        throw error;
    }
}

export default fetchApi
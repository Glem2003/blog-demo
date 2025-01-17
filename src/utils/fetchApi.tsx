import axios from "axios";
import { Article } from "../types/BlogArticleProps";

const fetchApi: (API_URL: string) => Promise<Article[]> = async (API_URL) => {
    try {
        const response = await axios.get(API_URL);
        const content = await response.data;
        return content.data;
    } catch (error: any) {
        throw new Error(error.message)
    }
}

export default fetchApi
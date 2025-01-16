import axiosConfig from "../utils/axiosConfig";

// type
import { Article, ApiResponse, ArticleData } from "../types/BlogArticleProps";

// api utils
export const getArticle = async (articleId: number): Promise<Article> => {
    const response = await axiosConfig.get<ApiResponse<Article>>(`/article/${articleId}`);
    return response.data.data
}

export const postArticle = async (articleData: ArticleData): Promise<Article> => {
    const response = await axiosConfig.post('/article', articleData);
    return response.data
}

export const putArticle = async (articleId: number, articleData: Article): Promise<Article> => {
    const response = await axiosConfig.put<Article>(`/article/${articleId}`, articleData);
    return response.data
}

export const deleteArticle = async (articleId: number): Promise<void> => {
    return axiosConfig.delete(`/article/${articleId}`)
}
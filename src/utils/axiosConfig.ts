import axios, { AxiosResponse } from "axios";
import { ARTICLE_API_URL } from "../config";

// type
import { Article } from "../types/BlogArticleProps";

const axiosConfig = axios.create({
    baseURL: ARTICLE_API_URL,
    timeout: 5000
})

// 攔截器(interceptors)
axiosConfig.interceptors.response.use(
    (response: AxiosResponse<Article>) => response,
    error => Promise.reject(error)
);

export default axiosConfig
export interface ApiResponse<T> {
    data: T;
    message: string
}

export interface Article {
    id: number | null
    title: string
    type: string
    content: string
    created_at: string
    updated_at: string
}

export interface ArticleData {
    title: string
    type: string
    content: string
    updated_at: string
}

export interface BlogArticleProps {
    data: Article[]
}
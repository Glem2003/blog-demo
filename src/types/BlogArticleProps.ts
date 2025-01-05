export interface Article {
    id: number
    title: string
    content: string
    created_at: string
    updated_at: string
    type?: string
}

export interface BlogArticleProps {
    Data: Article[]
}
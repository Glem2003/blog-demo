export interface Article {
    id: number
    title: string
    type: string
    content: string
    created_at: string
    updated_at: string
}

export interface BlogArticleProps {
    Data: Article[]
}
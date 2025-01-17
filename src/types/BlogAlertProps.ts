export interface BlogAlertProps {
    title: string
    text?: string | null
    error?: string | null
    show?: boolean
    onHide?: () => void
    background?: 'bg-primary' | 'bg-danger' | 'bg-success' | 'bg-warning' | 'bg-info' | 'bg-dark' | 'bg-light' | 'bg-white'
}
export interface UseAlertShowProps {
    isError?: string | null;
    isMessage?: string | null;
    onClearError?: () => void
    onClearMessage?: () => void
}

export interface UseBackstageFormProps {
    currentValue: string | null;
}
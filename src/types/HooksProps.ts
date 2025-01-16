export interface UseAlertShowProps {
    isError: string | null;
    onClearError?: () => void
}

export interface UseBackstageFormProps {
    currentValue: string | null;
}
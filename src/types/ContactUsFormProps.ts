export interface ContactUsFormProps {
    controlId: string
    label: string
    type: string
    placeholder: string
    as?: 'input' | 'textarea' | React.ElementType
}
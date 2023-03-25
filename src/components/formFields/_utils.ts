export interface InputFieldProp {
    name: string
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>void
    placeholder?: string
    type?: string
    label?: string
    error?: string
}
interface LabelWithTextareaProps {
    label: string,
    textareaPlaceholder: string,
    classNameTextarea: string,
    rows?: number,
    value?: string,
    onChange?: (value: string) => void,
}

export function LabelWithTextarea({ label, textareaPlaceholder, classNameTextarea, rows, value, onChange }: LabelWithTextareaProps) {
    return (
        <label className="flex flex-col gap-2">
            <span className="text-sm font-medium">{label}</span>
            <textarea
                rows={rows}
                placeholder={textareaPlaceholder}
                className={classNameTextarea}
                value={value}
                onChange={(e) => onChange?.(e.target.value)}
            />
        </label>
    )
}

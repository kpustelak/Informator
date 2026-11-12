interface LabelWithInputProps {
    label: string,
    inputPlaceholder: string,
    classNameInput: string,
    type?: string,
    value?: string,
    onChange?: (value: string) => void,
}

export function LabelWithInput({ label, inputPlaceholder, classNameInput, type, value, onChange }: LabelWithInputProps) {
    return (
        <label className="flex flex-col gap-2">
            <span className="text-sm font-medium">{label}</span>
            <input
                type={type}
                placeholder={inputPlaceholder}
                className={classNameInput}
                value={value}
                onChange={(e) => onChange?.(e.target.value)}
            />
        </label>
    )
}

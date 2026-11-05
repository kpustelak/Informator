


const BASE_CLASSES =
    "inline-flex cursor-pointer items-center justify-center rounded-xl border px-4 py-2 text-base font-medium tracking-normal transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"

const VARIANT_CLASSES = {
    primary: "border-accent bg-accent text-muted hover:border-accent-hover hover:bg-accent-hover",
    secondary: "border-ink bg-ink text-on-accent hover:border-ink-soft hover:bg-ink-soft",
    outline: "border-line bg-transparent text-ink hover:bg-line",
    warning: "border-warning bg-warning text-on-accent hover:border-warning-hover hover:bg-warning-hover",
}

interface ButtonProps {
    children: React.ReactNode,
    type: "button" | "a",
    variant?: keyof typeof VARIANT_CLASSES,
    onClick?: () => void,
    href?: string,
}

export function Button({ children, type, variant = "primary", onClick, href }: ButtonProps) {
    const Tag = type
    
    return (
    <Tag onClick={onClick} href={href} className={`${BASE_CLASSES} ${VARIANT_CLASSES[variant]}`}>
        {children}
    </Tag>
    )
}

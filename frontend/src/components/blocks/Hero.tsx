
interface HeroProps {
    children?: React.ReactNode
}

export function Hero({ children }: HeroProps) {
    return(
        <div className="h-15 border-b border-line flex justify-end px-4">
            {children}
        </div>
    )
}
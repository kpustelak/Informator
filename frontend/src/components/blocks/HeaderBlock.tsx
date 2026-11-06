import {type ReactNode} from "react";

interface HeaderBlockProps {
    title: string,
    description: string,
    children: ReactNode
}

export function HeaderBlock({ title, description, children }: HeaderBlockProps) {
    return(
        <div className="flex justify-between border-b border-line px-6 py-10">
            <div className="w-1/2 flex flex-col gap-y-4">
                <h2>{title}</h2>
                <p className="text-ink-soft">{description}</p>
            </div>
            <div className="flex align-center items-center">
                <div className="h-fit">
                    {children}
                </div>
            </div>
        </div>
    )
}
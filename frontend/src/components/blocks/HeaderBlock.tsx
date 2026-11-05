import {type ReactNode} from "react";

interface HeaderBlockProps {
    title: string,
    description: string,
    children: ReactNode
}

export function HeaderBlock({ title, description, children }: HeaderBlockProps) {
    return(
        <div className="flex justify-between border-b border-line p-6">
            <div className="w-1/2 flex flex-col gap-y-4">
                <h1>{title}</h1>
                <p className="text-ink-soft">{description}</p>
            </div>
            <div className="flex align-center items-center">
                <div className="h-1/2">
                    {children}
                </div>
            </div>
        </div>
    )
}
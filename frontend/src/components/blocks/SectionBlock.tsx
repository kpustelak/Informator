import type {IconType} from "react-icons";

interface SectionBlockProps {
    sidePanelOpen: () => void,
    title: string,
    icon: IconType,
    description: string,
    isFilled: boolean,
}

export function SectionBlock({sidePanelOpen, title, icon: Icon, description, isFilled}: SectionBlockProps) {
    return (
        <div className="px-6 ">
            <button
                type="button"
                className={`group flex w-full cursor-pointer flex-col items-center gap-3 rounded-2xl border-2 border-line px-6 py-16 text-center transition-colors hover:bg-accent/5 focus-visible:outline-2 focus-visible:outline-offset-2 ${isFilled ? "border-solid hover:border-ink focus-visible:outline-ink" : "border-dashed hover:border-accent focus-visible:outline-accent"}`}
                onClick={sidePanelOpen}
            >
                <span className={`rounded-full bg-line p-4 text-ink-soft transition-colors ${isFilled ? "group-hover:text-ink" : "group-hover:text-accent"}`}>
                    <Icon className="size-10" />
                </span>
                <span className="font-medium">{title}</span>
                <span className="text-sm text-ink-soft">{description}</span>
            </button>
        </div>
    )
}

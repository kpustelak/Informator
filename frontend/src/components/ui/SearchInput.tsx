import { GoSearch } from "react-icons/go";

type SearchInputProps = React.ComponentProps<"input"> & {
    wrapperClassName?: string
}

export function SearchInput({ className = "", wrapperClassName = "", ...props }: SearchInputProps) {
    return (
        <label className={`relative ${wrapperClassName}`}>
            <GoSearch className="absolute top-1/2 -translate-y-1/2 ml-4"/>
            <input
                type="search"
                aria-label="Search"
                placeholder="Search..."
                className={`w-full pl-10 rounded-xl border border-line bg-transparent px-4 py-2 text-sm text-ink placeholder:text-ink-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${className}`}
                {...props}
            />
        </label>
    )
}

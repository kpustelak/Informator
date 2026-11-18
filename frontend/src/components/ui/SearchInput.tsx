import { GoSearch } from "react-icons/go";
import {INPUT_CLASSES} from "@/components/ui/inputClasses.ts";

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
                className={`${INPUT_CLASSES} pl-10 ${className}`}
                {...props}
            />
        </label>
    )
}

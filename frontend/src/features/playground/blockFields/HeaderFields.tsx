import {INPUT_CLASSES} from "@/features/playground/inputClasses.ts";
import type {BlockFieldsProps, HeaderData} from "./types.ts";

export function HeaderFields({value, onChange}: BlockFieldsProps<HeaderData>) {
    return (
        <>
            <label className="flex flex-col gap-2">
                <span className="text-sm font-medium">Header title</span>
                <input
                    placeholder="e.g. About me"
                    className={INPUT_CLASSES}
                    value={value.title}
                    onChange={(e) => onChange({...value, title: e.target.value})}
                />
            </label>
            <label className="flex flex-col gap-2">
                <span className="text-sm font-medium">Header description</span>
                <input
                    placeholder="e.g. A few words about me"
                    className={INPUT_CLASSES}
                    value={value.description}
                    onChange={(e) => onChange({...value, description: e.target.value})}
                />
            </label>
        </>
    )
}

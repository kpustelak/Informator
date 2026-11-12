import {INPUT_CLASSES} from "@/features/playground/inputClasses.ts";
import type {BlockFieldsProps, LinkData} from "./types.ts";

export function LinkFields({value, onChange}: BlockFieldsProps<LinkData>) {
    return (
        <>
            <label className="flex flex-col gap-2">
                <span className="text-sm font-medium">Label</span>
                <input
                    placeholder="e.g. My GitHub"
                    className={INPUT_CLASSES}
                    value={value.label}
                    onChange={(e) => onChange({...value, label: e.target.value})}
                />
            </label>
            <label className="flex flex-col gap-2">
                <span className="text-sm font-medium">URL</span>
                <input
                    type="url"
                    placeholder="https://..."
                    className={INPUT_CLASSES}
                    value={value.url}
                    onChange={(e) => onChange({...value, url: e.target.value})}
                />
            </label>
        </>
    )
}

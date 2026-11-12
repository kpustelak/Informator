import {INPUT_CLASSES} from "@/features/playground/inputClasses.ts";
import type {BlockFieldsProps, ImageData} from "./types.ts";

export function ImageFields({value, onChange}: BlockFieldsProps<ImageData>) {
    return (
        <>
            <label className="flex flex-col gap-2">
                <span className="text-sm font-medium">Image URL</span>
                <input
                    type="url"
                    placeholder="https://..."
                    className={INPUT_CLASSES}
                    value={value.src}
                    onChange={(e) => onChange({...value, src: e.target.value})}
                />
            </label>
            <label className="flex flex-col gap-2">
                <span className="text-sm font-medium">Alt text</span>
                <input
                    placeholder="e.g. Me on a mountain"
                    className={INPUT_CLASSES}
                    value={value.alt}
                    onChange={(e) => onChange({...value, alt: e.target.value})}
                />
            </label>
        </>
    )
}

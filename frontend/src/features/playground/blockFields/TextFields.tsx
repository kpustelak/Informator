import {INPUT_CLASSES} from "@/features/playground/inputClasses.ts";
import type {BlockFieldsProps, TextData} from "./types.ts";

export function TextFields({value, onChange}: BlockFieldsProps<TextData>) {
    return (
        <label className="flex flex-col gap-2">
            <span className="text-sm font-medium">Content</span>
            <textarea
                rows={6}
                placeholder="Write something..."
                className={INPUT_CLASSES}
                value={value.content}
                onChange={(e) => onChange({content: e.target.value})}
            />
        </label>
    )
}

import {INPUT_CLASSES} from "@/features/playground/inputClasses.ts";
import type {BlockFieldsProps, GalleryData} from "./types.ts";

export function GalleryFields({value, onChange}: BlockFieldsProps<GalleryData>) {
    return (
        <label className="flex flex-col gap-2">
            <span className="text-sm font-medium">Image URLs (one per line)</span>
            <textarea
                rows={6}
                placeholder={"https://...\nhttps://..."}
                className={INPUT_CLASSES}
                value={value.images.join("\n")}
                onChange={(e) => onChange({images: e.target.value.split("\n")})}
            />
        </label>
    )
}

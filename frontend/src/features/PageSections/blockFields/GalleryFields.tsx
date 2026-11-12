import {LabelWithTextarea} from "@/components/blocks/LabelWithTextarea.tsx";
import {INPUT_CLASSES} from "@/components/ui/inputClasses.ts";
import type {BlockFieldsProps, GalleryData} from "@/lib/interfaces/PageSections.ts";

export function GalleryFields({value, onChange}: BlockFieldsProps<GalleryData>) {
    return (
        <LabelWithTextarea
            label="Image URLs (one per line)"
            textareaPlaceholder={"https://...\nhttps://..."}
            classNameTextarea={INPUT_CLASSES}
            rows={6}
            value={value.images.join("\n")}
            onChange={(text) => onChange({images: text.split("\n")})}
        />
    )
}

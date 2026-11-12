import {LabelWithInput} from "@/components/blocks/LabelWithInput.tsx";
import {INPUT_CLASSES} from "@/components/ui/inputClasses.ts";
import type {BlockFieldsProps, ImageData} from "@/lib/interfaces/PageSections.ts";

export function ImageFields({value, onChange}: BlockFieldsProps<ImageData>) {
    return (
        <>
            <LabelWithInput
                label="Image URL"
                inputPlaceholder="https://..."
                classNameInput={INPUT_CLASSES}
                type="url"
                value={value.src}
                onChange={(src) => onChange({...value, src})}
            />
            <LabelWithInput
                label="Alt text"
                inputPlaceholder="e.g. Me on a mountain"
                classNameInput={INPUT_CLASSES}
                value={value.alt}
                onChange={(alt) => onChange({...value, alt})}
            />
        </>
    )
}

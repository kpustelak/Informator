import {LabelWithTextarea} from "@/components/blocks/LabelWithTextarea.tsx";
import {INPUT_CLASSES} from "@/components/ui/inputClasses.ts";
import type {BlockFieldsProps, TextData} from "@/lib/interfaces/PageSections.ts";

export function TextFields({value, onChange}: BlockFieldsProps<TextData>) {
    return (
        <LabelWithTextarea
            label="Content"
            textareaPlaceholder="Write something..."
            classNameTextarea={INPUT_CLASSES}
            rows={6}
            value={value.content}
            onChange={(content) => onChange({content})}
        />
    )
}

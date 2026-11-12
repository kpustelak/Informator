import {LabelWithInput} from "@/components/blocks/LabelWithInput.tsx";
import {INPUT_CLASSES} from "@/components/ui/inputClasses.ts";
import type {BlockFieldsProps, LinkData} from "@/lib/interfaces/PageSections.ts";

export function LinkFields({value, onChange}: BlockFieldsProps<LinkData>) {
    return (
        <>
            <LabelWithInput
                label="Label"
                inputPlaceholder="e.g. My GitHub"
                classNameInput={INPUT_CLASSES}
                value={value.label}
                onChange={(label) => onChange({...value, label})}
            />
            <LabelWithInput
                label="URL"
                inputPlaceholder="https://..."
                classNameInput={INPUT_CLASSES}
                type="url"
                value={value.url}
                onChange={(url) => onChange({...value, url})}
            />
        </>
    )
}

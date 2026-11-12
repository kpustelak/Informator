import {LabelWithInput} from "@/components/blocks/LabelWithInput.tsx";
import {INPUT_CLASSES} from "@/components/ui/inputClasses.ts";
import type {BlockFieldsProps, HeaderData} from "@/lib/interfaces/PageSections.ts";

export function HeaderFields({value, onChange}: BlockFieldsProps<HeaderData>) {
    return (
        <>
            <LabelWithInput
                label="Header title"
                inputPlaceholder="e.g. About me"
                classNameInput={INPUT_CLASSES}
                value={value.title}
                onChange={(title) => onChange({...value, title})}
            />
            <LabelWithInput
                label="Header description"
                inputPlaceholder="e.g. A few words about me"
                classNameInput={INPUT_CLASSES}
                value={value.description}
                onChange={(description) => onChange({...value, description})}
            />
        </>
    )
}

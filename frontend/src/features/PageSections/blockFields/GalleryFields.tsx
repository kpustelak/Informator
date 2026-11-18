import { GoChevronDown } from "react-icons/go";
import { useMediaStore } from "@/stores/mediaStore";
import type {BlockFieldsProps, GalleryData} from "@/lib/interfaces/PageSections.ts";

export function GalleryFields({value, onChange}: BlockFieldsProps<GalleryData>) {
    const images = useMediaStore((state) => state.images)

    function toggleImage(id: string) {
        const imageIds = value.imageIds.includes(id)
            ? value.imageIds.filter((imageId) => imageId !== id)
            : [...value.imageIds, id]
        onChange({ imageIds })
    }

    return (
        <details className="group rounded-xl border border-line" open>
            <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-medium">
                <span>
                    Images <span className="text-ink-soft">· {value.imageIds.length} selected</span>
                </span>
                <GoChevronDown className="size-4 text-ink-soft transition-transform group-open:rotate-180" />
            </summary>
            <div className="border-t border-line p-4">
                {images.length === 0 ? (
                    <p className="text-sm text-ink-soft">No images in library yet</p>
                ) : (
                    <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                        {images.map((image) => (
                            <label
                                key={image.id}
                                className="relative aspect-square cursor-pointer rounded-xl has-checked:ring-2 has-checked:ring-accent has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-accent"
                            >
                                <input
                                    type="checkbox"
                                    checked={value.imageIds.includes(image.id)}
                                    onChange={() => toggleImage(image.id)}
                                    className="peer sr-only"
                                />
                                <img
                                    src={image.url}
                                    alt={image.alt}
                                    loading="lazy"
                                    className="size-full rounded-xl object-cover opacity-60 transition-opacity hover:opacity-100 peer-checked:opacity-100"
                                />
                            </label>
                        ))}
                    </div>
                )}
            </div>
        </details>
    )
}

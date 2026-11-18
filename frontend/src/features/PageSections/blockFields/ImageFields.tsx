import { GoChevronDown } from "react-icons/go";
import { useMediaStore } from "@/stores/mediaStore";
import type {BlockFieldsProps, ImageData} from "@/lib/interfaces/PageSections.ts";

export function ImageFields({value, onChange}: BlockFieldsProps<ImageData>) {
    const images = useMediaStore((state) => state.images)

    const selectedImage = images.find((image) => image.id === value.imageId)

    return (
        <details className="group rounded-xl border border-line" open>
            <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-medium">
                <span>
                    Image <span className="text-ink-soft">· {selectedImage ? selectedImage.alt : "none selected"}</span>
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
                                    type="radio"
                                    name="section-image"
                                    checked={value.imageId === image.id}
                                    onChange={() => onChange({ imageId: image.id })}
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

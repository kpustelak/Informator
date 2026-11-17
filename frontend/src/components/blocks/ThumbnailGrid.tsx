import type { MediaImage } from "@/lib/interfaces/MediaImage";

interface ThumbnailGridProps {
    images: MediaImage[],
    onSelect: (index: number) => void,
    onRemove?: (id: string) => void,
}

export function ThumbnailGrid({ images, onSelect, onRemove }: ThumbnailGridProps) {
    return (
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
            {images.map((image, index) => (
                <div key={image.id} className="relative aspect-square">
                    <button type="button" onClick={() => onSelect(index)} className="size-full cursor-pointer">
                        <img src={image.url} alt={image.alt} loading="lazy" className="size-full rounded-xl object-cover" />
                    </button>
                    {onRemove && (
                        <button
                            type="button"
                            onClick={() => onRemove(image.id)}
                            aria-label={`Remove ${image.alt}`}
                            className="absolute top-1 right-1 cursor-pointer rounded-full bg-black/60 px-2 text-white"
                        > X
                        </button>
                    )}
                </div>
            ))}
        </div>
    )
}
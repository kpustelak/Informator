import { create } from "zustand";
import type { MediaImage } from "@/lib/interfaces/MediaImage";

const MOCK_MEDIA: MediaImage[] = [
    { id: "1", url: "https://picsum.photos/seed/a/800/600", alt: "Mock image 1" },
    { id: "2", url: "https://picsum.photos/seed/b/800/600", alt: "Mock image 2" },
    { id: "3", url: "https://picsum.photos/seed/c/800/600", alt: "Mock image 3" },
    { id: "4", url: "https://picsum.photos/seed/d/800/600", alt: "Mock image 4" },
    { id: "5", url: "https://picsum.photos/seed/e/800/600", alt: "Mock image 5" },
    { id: "6", url: "https://picsum.photos/seed/f/800/600", alt: "Mock image 6" },
    { id: "7", url: "https://picsum.photos/seed/g/800/600", alt: "Mock image 7" },
    { id: "8", url: "https://picsum.photos/seed/h/800/600", alt: "Mock image 8" },
    { id: "9", url: "https://picsum.photos/seed/i/800/600", alt: "Mock image 9" },
]

interface MediaState {
    images: MediaImage[],
    addImage: (url: string, alt: string) => void,
    removeImage: (id: string) => void,
}

export const useMediaStore = create<MediaState>()((set) => ({
    images: MOCK_MEDIA,
    addImage: (url, alt) =>
        set((state) => ({ images: [...state.images, { id: crypto.randomUUID(), url, alt }] })),
    removeImage: (id) =>
        set((state) => ({ images: state.images.filter((image) => image.id !== id) })),
}))

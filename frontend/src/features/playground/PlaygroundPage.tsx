import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { HeaderBlock, ThumbnailGrid } from "@/components/blocks";
import { useMediaStore } from "@/stores/mediaStore";

export function PlaygroundPage() {
    const images = useMediaStore((state) => state.images)
    const removeImage = useMediaStore((state) => state.removeImage)

    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
       <div>
           <HeaderBlock
               title={"Lorem ipsum"}
               description={"Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. "}
           />
           <div className="p-6">
               <ThumbnailGrid images={images} onSelect={setOpenIndex} onRemove={removeImage} />
               <Lightbox
                   open={openIndex !== null}
                   index={openIndex ?? 0}
                   close={() => setOpenIndex(null)}
                   slides={images.map((image) => ({ src: image.url, alt: image.alt }))}
               />
           </div>
       </div>
    )
}

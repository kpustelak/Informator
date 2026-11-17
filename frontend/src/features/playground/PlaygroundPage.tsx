import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {HeaderBlock, LabelWithInput, SidePanel, ThumbnailGrid} from "@/components/blocks";
import { useMediaStore } from "@/stores/mediaStore";
import {Button, INPUT_CLASSES} from "@/components/ui";
import {useDropzone} from "react-dropzone";
import { GoUpload, GoX } from "react-icons/go";

export function PlaygroundPage() {
    const images = useMediaStore((state) => state.images)
    const removeImage = useMediaStore((state) => state.removeImage)
    const addImage = useMediaStore((state) => state.addImage)

    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const [isPanelOpen, setIsPanelOpen] = useState<boolean>(false)

    function onSidePanelOpen() { setIsPanelOpen(true) }
    function onSidePanelClose() { setIsPanelOpen(false) }

    const {acceptedFiles, getRootProps, getInputProps, isDragActive, removeFile, clearFiles } = useDropzone({
        accept: {"image/jpeg": [], "image/png": []}
    });

    function addImageToList(){
        for(const x of acceptedFiles){
            addImage(URL.createObjectURL(x), "image/jpeg");
        }
        onSidePanelClose();
    }

    return (
       <div>
           <SidePanel title="Add Image" submitLabel="Create" isOpen={isPanelOpen} onClose={onSidePanelClose} onSubmit={addImageToList}>
               <LabelWithInput label="Name" inputPlaceholder="e.g. Personal blog" classNameInput={INPUT_CLASSES} />
               <section className="flex flex-col gap-3">
                   <span className="text-sm font-medium">Images</span>
                   <div
                       {...getRootProps({
                           className: `flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed px-6 py-10 text-center transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${isDragActive ? "border-accent bg-accent/10" : "border-line hover:border-ink-soft hover:bg-line/30"}`,
                       })}
                   >
                       <input {...getInputProps()} />
                       <GoUpload className={`size-8 ${isDragActive ? "text-accent" : "text-ink-soft"}`} />
                       <p className="text-sm text-ink">
                           {isDragActive ? "Drop images here" : "Drag images here or click to browse"}
                       </p>
                       <p className="text-xs text-ink-soft">PNG, JPG</p>
                   </div>
                   {acceptedFiles.length > 0 && (
                       <div className="flex flex-col gap-2">
                           <div className="flex items-center justify-between">
                               <span className="text-sm text-ink-soft">{acceptedFiles.length} selected</span>
                               <button type="button" onClick={clearFiles} className="cursor-pointer text-sm text-ink-soft hover:text-warning">
                                   Clear all
                               </button>
                           </div>
                           <ul className="flex flex-col divide-y divide-line rounded-xl border border-line">
                               {acceptedFiles.map((file) => (
                                   <li key={file.name + file.lastModified} className="flex items-center justify-between gap-3 px-4 py-2 text-sm">
                                       <span className="truncate text-ink">{file.name}</span>
                                       <div className="flex shrink-0 items-center gap-3">
                                           <span className="text-xs text-ink-soft">{(file.size / 1024).toFixed(0)} KB</span>
                                           <button
                                               type="button"
                                               onClick={() => removeFile(file)}
                                               aria-label={`Remove ${file.name}`}
                                               className="cursor-pointer rounded-full p-1 text-ink-soft hover:bg-line hover:text-warning"
                                           >
                                               <GoX />
                                           </button>
                                       </div>
                                   </li>
                               ))}
                           </ul>
                       </div>
                   )}
               </section>
           </SidePanel>
           <HeaderBlock
               title={"Lorem ipsum"}
               description={"Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. "}
           >
               <Button type={"button"} variant={"secondary"} onClick={onSidePanelOpen}> Add page </Button>
           </HeaderBlock>
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

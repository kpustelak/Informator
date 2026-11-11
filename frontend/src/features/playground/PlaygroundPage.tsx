import {HeaderBlock} from "@/components/blocks/HeaderBlock.tsx";
import { PiCirclesThreePlusFill } from "react-icons/pi";
import {SidePanel} from "@/components/blocks/SidePanel.tsx";
import {useState} from "react";

const INPUT_CLASSES = "w-full rounded-xl border border-line bg-transparent px-4 py-2 text-sm text-ink placeholder:text-ink-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"

const BLOCK_TYPES = [
    { id: "text", label: "Text" },
    { id: "image", label: "Image" },
    { id: "gallery", label: "Gallery" },
    { id: "link", label: "Link" },
] as const

type BlockType = typeof BLOCK_TYPES[number]["id"]

export function PlaygroundPage() {
    const [isPanelOpen, setIsPanelOpen] = useState<boolean>(false)
    const [newBlockType, setNewBlockType] = useState<BlockType>("text")

    function onSidePanelOpen() { setIsPanelOpen(true) }
    function onSidePanelClose() { setIsPanelOpen(false) }

    return (
        <div className="h-full">
            <SidePanel title="New section" isOpen={isPanelOpen} onClose={onSidePanelClose}>
                <label className="flex flex-col gap-2">
                    <span className="text-sm font-medium">Section title</span>
                    <input placeholder="e.g. About me" className={INPUT_CLASSES} />
                </label>
                <fieldset>
                    <legend className="mb-2 text-sm font-medium">Section type</legend>
                    <div className="grid grid-cols-2 gap-2">
                        {BLOCK_TYPES.map(({ id, label }) => (
                            <label
                                key={id}
                                className="flex cursor-pointer items-center justify-center rounded-xl border border-line px-4 py-3 text-sm text-ink-soft transition-colors hover:bg-line hover:text-ink has-checked:border-accent has-checked:bg-accent/10 has-checked:text-ink has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-accent"
                            >
                                <input
                                    type="radio"
                                    name="section-type"
                                    checked={newBlockType === id}
                                    onChange={() => setNewBlockType(id)}
                                    className="sr-only"
                                />
                                {label}
                            </label>
                        ))}
                    </div>
                </fieldset>
            </SidePanel>
            <HeaderBlock title={"Lorem ipsum"} description={"Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. "} />
            <div className="px-6 py-6">
                <button
                    type="button"
                    className="group flex w-full cursor-pointer flex-col items-center gap-3 rounded-2xl border-2 border-dashed border-line px-6 py-16 text-center transition-colors hover:border-accent hover:bg-accent/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    onClick={onSidePanelOpen}
                >
                    <span className="rounded-full bg-line p-4 text-ink-soft transition-colors group-hover:text-accent">
                        <PiCirclesThreePlusFill className="size-10" />
                    </span>
                    <span className="font-medium">Add section</span>
                    <span className="text-sm text-ink-soft">Pick a section type to start building this page</span>
                </button>
            </div>
        </div>
    )
}

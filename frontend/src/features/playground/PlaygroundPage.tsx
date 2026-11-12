import { MdOutlineTitle } from "react-icons/md";
import { GalleryFields, HeaderFields, ImageFields, LinkFields, TextFields } from "@/features/PageSections/blockFields";
import { INPUT_CLASSES} from "@/components/ui/inputClasses.ts";
import { PiCirclesThreePlusFill } from "react-icons/pi";
import { useState} from "react";
import type { GalleryData, HeaderData, LinkData, TextData, ImageData } from "@/lib/interfaces/PageSections.ts";
import { HeaderBlock, LabelWithInput, SectionBlock, SidePanel} from "@/components/blocks";

const BLOCK_TYPES = [
    { id: "header", label: "Header" },
    { id: "text", label: "Text" },
    { id: "image", label: "Image" },
    { id: "gallery", label: "Gallery" },
    { id: "link", label: "Link" },
] as const

type BlockType = typeof BLOCK_TYPES[number]["id"]

interface BlockDataMap {
    header: HeaderData,
    text: TextData,
    image: ImageData,
    gallery: GalleryData,
    link: LinkData,
}

const EMPTY_BLOCK_DATA: BlockDataMap = {
    header: { title: "", description: "" },
    text: { content: "" },
    image: { src: "", alt: "" },
    gallery: { images: [] },
    link: { label: "", url: "" },
}

interface Section {
    id: number,
    title: string,
    apiName: string,
    type: BlockType,
    data: BlockDataMap,
}

const MOCK_SECTIONS: Section[] = [
    {
        id: 1,
        title: "About me",
        apiName: "about-me-header",
        type: "header",
        data: {...EMPTY_BLOCK_DATA, header: { title: "Hi, I'm Kornel", description: "Developer and builder" }},
    },
    {
        id: 2,
        title: "Bio",
        apiName: "bio-text",
        type: "text",
        data: {...EMPTY_BLOCK_DATA, text: { content: "Lorem ipsum dolor sit amet consectetur adipiscing elit." }},
    },
    {
        id: 3,
        title: "Avatar",
        apiName: "avatar-image",
        type: "image",
        data: {...EMPTY_BLOCK_DATA, image: { src: "https://picsum.photos/400", alt: "Avatar" }},
    },
    {
        id: 4,
        title: "GitHub",
        apiName: "github-link",
        type: "link",
        data: {...EMPTY_BLOCK_DATA, link: { label: "My GitHub", url: "https://github.com" }},
    },
]

export function PlaygroundPage() {
    const [isPanelOpen, setIsPanelOpen] = useState(false)
    const [newBlockType, setNewBlockType] = useState<BlockType>("text")
    const [blockData, setBlockData] = useState<BlockDataMap>(EMPTY_BLOCK_DATA)

    const [sections, setSections] = useState<Section[]>(MOCK_SECTIONS)
    const [editingId, setEditingId] = useState<number | null>(null)
    const [title, setTitle] = useState("")
    const [apiName, setApiName] = useState("")

    function onSidePanelClose() { setIsPanelOpen(false) }

    function openNew() {
        setEditingId(null)
        setTitle("")
        setApiName("")
        setNewBlockType("text")
        setBlockData(EMPTY_BLOCK_DATA)
        setIsPanelOpen(true)
    }
    function openEdit(section: Section) {
        setEditingId(section.id)
        setTitle(section.title)
        setApiName(section.apiName)
        setNewBlockType(section.type)
        setBlockData(section.data)
        setIsPanelOpen(true)
    }

    function onSave() {
        const section = { id: editingId ?? Date.now(), title, apiName, type: newBlockType, data: blockData }
        setSections((prev) =>
            editingId === null
                ? [...prev, section]
                : prev.map((s) => (s.id === editingId ? section : s))
        )
        setIsPanelOpen(false)
    }

    return (
        <div className="h-full">
            <SidePanel
                title={editingId === null ? "New section" : "Edit section"}
                submitLabel={editingId === null ? "Create" : "Save"}
                isOpen={isPanelOpen}
                onClose={onSidePanelClose}
                onSubmit={onSave}
            >
                <LabelWithInput label="Section title" inputPlaceholder="e.g. About me" classNameInput={INPUT_CLASSES} value={title} onChange={setTitle} />
                <LabelWithInput label="Section API Name" inputPlaceholder="e.g. about-me-header" classNameInput={INPUT_CLASSES} value={apiName} onChange={setApiName} />
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
                {newBlockType === "header" && (
                    <HeaderFields value={blockData.header} onChange={(header) => setBlockData({...blockData, header})} />
                )}
                {newBlockType === "text" && (
                    <TextFields value={blockData.text} onChange={(text) => setBlockData({...blockData, text})} />
                )}
                {newBlockType === "image" && (
                    <ImageFields value={blockData.image} onChange={(image) => setBlockData({...blockData, image})} />
                )}
                {newBlockType === "gallery" && (
                    <GalleryFields value={blockData.gallery} onChange={(gallery) => setBlockData({...blockData, gallery})} />
                )}
                {newBlockType === "link" && (
                    <LinkFields value={blockData.link} onChange={(link) => setBlockData({...blockData, link})} />
                )}
            </SidePanel>
            <HeaderBlock title={"Lorem ipsum"} description={"Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. "} />
            <div className="flex flex-col gap-y-4 py-4">
                {sections.map((section) => (
                    <SectionBlock
                        key={section.id}
                        isFilled
                        title={section.title}
                        description={section.apiName}
                        icon={MdOutlineTitle}
                        sidePanelOpen={() => openEdit(section)}
                    />
                ))}
                <SectionBlock
                    isFilled={false}
                    title="Add section"
                    description="Pick a section type to start building this page"
                    icon={PiCirclesThreePlusFill}
                    sidePanelOpen={openNew}
                />
            </div>
        </div>
    )
}

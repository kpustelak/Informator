export interface HeaderData {
    title: string,
    description: string,
}

export interface TextData {
    content: string,
}

export interface ImageData {
    src: string,
    alt: string,
}

export interface GalleryData {
    images: string[],
}

export interface LinkData {
    label: string,
    url: string,
}

export interface BlockFieldsProps<T> {
    value: T,
    onChange: (value: T) => void,
}


export const BLOCK_TYPES = [
    { id: "header", label: "Header" },
    { id: "text", label: "Text" },
    { id: "image", label: "Image" },
    { id: "gallery", label: "Gallery" },
    { id: "link", label: "Link" },
] as const

export type BlockType = typeof BLOCK_TYPES[number]["id"]

export  interface BlockDataMap {
    header: HeaderData,
    text: TextData,
    image: ImageData,
    gallery: GalleryData,
    link: LinkData,
}

export const EMPTY_BLOCK_DATA: BlockDataMap = {
    header: { title: "", description: "" },
    text: { content: "" },
    image: { src: "", alt: "" },
    gallery: { images: [] },
    link: { label: "", url: "" },
}

export interface Section {
    id: number,
    title: string,
    apiName: string,
    type: BlockType,
    data: BlockDataMap,
}

export const MOCK_SECTIONS: Section[] = [
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

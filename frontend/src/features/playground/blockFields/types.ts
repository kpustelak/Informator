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

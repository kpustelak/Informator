import type { Column } from "@/components/blocks/ContentTable"

export interface MockRow {
    id: string
    first: string
    second: string
    third: string
    fourth: string
}

export const mockColumns: Column<MockRow>[] = [
    { id: "first", header: "Lorem", cell: r => r.first },
    { id: "second", header: "Ipsum", cell: r => r.second },
    { id: "third", header: "Dolor", cell: r => r.third },
    { id: "fourth", header: "Sit amet", cell: r => r.fourth },
]

export const mockRows: MockRow[] = [
    { id: "r1", first: "Lorem ipsum", second: "Dolor sit amet", third: "Consectetur", fourth: "Adipiscing elit" },
    { id: "r2", first: "Sed do eiusmod", second: "Tempor incididunt", third: "Ut labore", fourth: "Et dolore magna" },
    { id: "r3", first: "Aliqua enim", second: "Ad minim veniam", third: "Quis nostrud", fourth: "Exercitation ullamco" },
    { id: "r4", first: "Laboris nisi", second: "Ut aliquip ex", third: "Ea commodo", fourth: "Consequat duis" },
]

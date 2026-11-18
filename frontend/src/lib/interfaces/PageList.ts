import type { VisitsPoint } from '@/components/charts/VisitsChart'

const DAYS = 90
const ZERO_DAYS = new Set([12, 13, 47, 71])
const DAY_MS = 24 * 60 * 60 * 1000

function visitsForDay(index: number): number {
    if (ZERO_DAYS.has(index)) return 0

    const trend = 120 + index * 3
    const weekday = new Date(Date.UTC(2026, 0, 1) + index * DAY_MS).getUTCDay()
    const weekendDip = weekday === 0 || weekday === 6 ? 0.6 : 1
    const noise = Math.sin(index * 12.9898) * 0.25 + 1

    return Math.round(trend * weekendDip * noise)
}

export const mockVisits: VisitsPoint[] = Array.from({ length: DAYS }, (_, index) => {
    const date = new Date(Date.now() - (DAYS - 1 - index) * DAY_MS)
    return {
        date: date.toISOString().slice(0, 10),
        visits: visitsForDay(index),
    }
})


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

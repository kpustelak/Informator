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

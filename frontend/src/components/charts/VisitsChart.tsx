import { useId } from 'react'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import type { TooltipContentProps, TooltipValueType } from 'recharts'
import type { NameType } from 'recharts/types/component/DefaultTooltipContent'

export interface VisitsPoint {
    date: string
    visits: number
}

interface VisitsChartProps {
    data: VisitsPoint[]
    height?: number
}

const dateFormatter = new Intl.DateTimeFormat('pl-PL', { day: 'numeric', month: 'short' })
const formatDate = (iso: string) => dateFormatter.format(new Date(iso))

function VisitsTooltip({ active, payload }: TooltipContentProps<TooltipValueType, NameType>) {
    if (!active || !payload?.length) return null
    const point = payload[0].payload as VisitsPoint

    return (
        <div className="rounded-md border border-line bg-surface px-3 py-2 text-sm shadow-lg">
            <p className="text-ink-soft">{formatDate(point.date)}</p>
            <p className="font-medium text-ink">{point.visits.toLocaleString('pl-PL')} wejść</p>
        </div>
    )
}

export function VisitsChart({ data, height = 300 }: VisitsChartProps) {
    const gradientId = useId()

    return (
        <ResponsiveContainer width="100%" height={height}>
            <AreaChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--color-accent)" stopOpacity={0.35} />
                        <stop offset="100%" stopColor="var(--color-accent)" stopOpacity={0} />
                    </linearGradient>
                </defs>

                <CartesianGrid vertical={false} stroke="var(--color-line)" />

                <XAxis
                    dataKey="date"
                    tickFormatter={formatDate}
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: 'var(--color-ink-soft)', fontSize: 12 }}
                    minTickGap={24}
                />
                <YAxis
                    domain={[0, 'auto']}
                    allowDecimals={false}
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: 'var(--color-ink-soft)', fontSize: 12 }}
                    width={40}
                />

                <Tooltip content={VisitsTooltip} cursor={{ stroke: 'var(--color-line)' }} />

                <Area
                    type="monotone"
                    dataKey="visits"
                    stroke="var(--color-accent)"
                    strokeWidth={2}
                    fill={`url(#${gradientId})`}
                    dot={false}
                    activeDot={{ r: 4, fill: 'var(--color-accent)', stroke: 'var(--color-surface)', strokeWidth: 2 }}
                />
            </AreaChart>
        </ResponsiveContainer>
    )
}

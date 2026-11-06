import { type ReactNode } from "react"

export interface Column<T> {
    id: string
    header: ReactNode
    cell: (row: T) => ReactNode
    className?: string
}

interface ContentTableProps<T> {
    columns: Column<T>[]
    rows: T[]
    getRowKey: (row: T) => string
}

const headerCell =
    "relative font-medium text-ink-soft after:absolute after:right-0 after:top-1/2 after:h-4 after:w-px after:-translate-y-1/2 after:bg-line last:after:hidden"

export function ContentTable<T>({ columns, rows, getRowKey }: ContentTableProps<T>) {
    return (
        <div className="overflow-hidden rounded-xl border border-line">
            <table className="w-full text-left text-sm">
                <thead className="border-b border-line">
                <tr>
                    {columns.map(column => (
                        <th key={column.id} scope="col" className={`px-4 py-3 ${headerCell} ${column.className ?? ""}`}>
                            {column.header}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody className="divide-y divide-line">
                {rows.map(row => (
                    <tr key={getRowKey(row)}>
                        {columns.map(column => (
                            <td key={column.id} className={`px-4 py-3 ${column.className ?? ""}`}>
                                {column.cell(row)}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
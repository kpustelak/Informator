import {Link} from "@tanstack/react-router";
import {HeaderBlock} from "@/components/blocks/HeaderBlock.tsx";
import {Button} from "@/components/ui/Button.tsx";
import {SearchInput} from "@/components/ui/SearchInput.tsx";
import {ContentTable, type Column} from "@/components/blocks/ContentTable.tsx";
import {mockColumns, mockRows, type MockRow} from "@/features/PageList/mockTable.ts";
import {VisitsChart} from "@/components/charts/VisitsChart.tsx";
import {mockVisits} from "@/features/PageList/mockVisits.ts";
import {SidePanel} from "@/components/blocks/SidePanel"

const columns: Column<MockRow>[] = mockColumns.map(column =>
    column.id === "first"
        ? {
            ...column,
            cell: row => (
                <Link
                    to="/pages/$pageId"
                    params={{ pageId: row.id }}
                    className="font-medium text-ink after:absolute after:inset-0 focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:-outline-offset-2 focus-visible:after:outline-accent"
                >
                    {row.first}
                </Link>
            ),
        }
        : column
)

export function PageList() {
    return (
        <div>
            <SidePanel />
            <HeaderBlock title={"Lorem ipsum"} description={"Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. "} >
                <Button type={"a"} variant={"secondary"}> Add page </Button>
            </HeaderBlock>
            <div className="flex px-6 py-6">
                <div className="w-2/3 flex flex-col gap-y-4">
                    <SearchInput />
                    <ContentTable
                        columns={columns}
                        rows={mockRows}
                        getRowKey={r => r.id}
                        rowClassName="relative hover:bg-muted"
                    />
                </div>
                <div className="w-1/3">
                    <VisitsChart data={mockVisits} />
                </div>
            </div>
        </div>
    )
}

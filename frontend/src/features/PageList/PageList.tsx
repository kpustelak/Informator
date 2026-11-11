import {Link} from "@tanstack/react-router";
import {HeaderBlock} from "@/components/blocks/HeaderBlock.tsx";
import {Button} from "@/components/ui/Button.tsx";
import {SearchInput} from "@/components/ui/SearchInput.tsx";
import {ContentTable, type Column} from "@/components/blocks/ContentTable.tsx";
import {mockColumns, mockRows, type MockRow} from "@/features/PageList/mockTable.ts";
import {VisitsChart} from "@/components/charts/VisitsChart.tsx";
import {mockVisits} from "@/features/PageList/mockVisits.ts";
import {SidePanel} from "@/components/blocks/SidePanel"
import {useState} from "react";

const INPUT_CLASSES = "w-full rounded-xl border border-line bg-transparent px-4 py-2 text-sm text-ink placeholder:text-ink-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"

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
    const [isPanelOpen, setIsPanelOpen] = useState<boolean>(false)

    function onSidePanelOpen() { setIsPanelOpen(true) }
    function onSidePanelClose() { setIsPanelOpen(false) }

    return (
        <div>
            <SidePanel title="New page" isOpen={isPanelOpen} onClose={onSidePanelClose}>
                <label className="flex flex-col gap-2">
                    <span className="text-sm font-medium">Name</span>
                    <input placeholder="e.g. Personal blog" className={INPUT_CLASSES} />
                </label>
                <label className="flex flex-col gap-2">
                    <span className="text-sm font-medium">API key</span>
                    <input placeholder="personal-blog" className={`${INPUT_CLASSES} font-mono`} />
                </label>
                <label className="flex flex-col gap-2">
                    <span className="text-sm font-medium">Description</span>
                    <textarea rows={4} placeholder="Short page description" className={`${INPUT_CLASSES} resize-none`} />
                </label>
                <label className="flex flex-col gap-2">
                    <span className="text-sm font-medium">Page type</span>
                    <select className={INPUT_CLASSES}>
                        <option>Blog</option>
                        <option>Portfolio</option>
                    </select>
                </label>
            </SidePanel>
            <HeaderBlock title={"Lorem ipsum"} description={"Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. "} >
                <Button type={"button"} variant={"secondary"} onClick={onSidePanelOpen}> Add page </Button>
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

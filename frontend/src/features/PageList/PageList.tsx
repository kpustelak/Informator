import {Link} from "@tanstack/react-router";
import {useState} from "react";

import {VisitsChart} from "@/components/charts/VisitsChart.tsx";
import { type Column, ContentTable, HeaderBlock, LabelWithInput, LabelWithTextarea, SidePanel } from "@/components/blocks";
import {Button, INPUT_CLASSES, SearchInput} from "@/components/ui"
import {mockColumns, type MockRow, mockRows, mockVisits} from "@/lib/interfaces/PageList.ts";

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
            <SidePanel title="Add Service" submitLabel="Create" isOpen={isPanelOpen} onClose={onSidePanelClose} onSubmit={onSidePanelClose}>
                <LabelWithInput label="Name" inputPlaceholder="e.g. Personal blog" classNameInput={INPUT_CLASSES} />
                <LabelWithInput label="API key" inputPlaceholder="personal-blog" classNameInput={`${INPUT_CLASSES} font-mono`} />
                <LabelWithTextarea label="Description" textareaPlaceholder="Short page description" classNameTextarea={`${INPUT_CLASSES} resize-none`} rows={4} />
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

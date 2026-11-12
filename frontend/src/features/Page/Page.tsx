import {HeaderBlock} from "@/components/blocks/HeaderBlock.tsx";
import {SearchInput} from "@/components/ui/SearchInput.tsx";
import {Button} from "@/components/ui/Button.tsx";
import {ContentTable} from "@/components/blocks/ContentTable.tsx";
import {mockColumns, mockRows} from "@/features/PageList/mockTable.ts";

export function Page(){
    return (
        <div>
            <HeaderBlock title={"Lorem ipsum"} description={"Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. "} />
            <div className="flex flex-col gap-4 px-6 py-6">
                <div className="flex gap-x-4">
                    <SearchInput wrapperClassName="flex-1" />
                    <Button type={"a"} variant={"secondary"}> Create Page </Button>
                </div>
                <ContentTable columns={mockColumns} rows={mockRows} getRowKey={r => r.id} />
            </div>
        </div>
    )
}
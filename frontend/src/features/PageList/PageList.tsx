import {HeaderBlock} from "@/components/blocks/HeaderBlock.tsx";
import {Button} from "@/components/ui/Button.tsx";
import {SearchInput} from "@/components/ui/SearchInput.tsx";
import {ContentTable} from "@/components/blocks/ContentTable.tsx";
import {mockColumns, mockRows} from "@/features/PageList/mockTable.ts";


export function PageList() {
    return (
        <div>
            <HeaderBlock title={"Lorem ipsum"} description={"Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. "} >
                <Button type={"a"} variant={"secondary"}> Add page </Button>
            </HeaderBlock>
            <div className="flex flex-col gap-4 px-6 py-6">
                <SearchInput />
                <ContentTable columns={mockColumns} rows={mockRows} getRowKey={r => r.id} />
            </div>
        </div>
    )
}
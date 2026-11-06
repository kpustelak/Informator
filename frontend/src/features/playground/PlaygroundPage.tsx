import {HeaderBlock} from "@/components/blocks/HeaderBlock.tsx";
import {Button} from "@/components/ui/Button.tsx";
import {ContentTable} from "@/components/blocks/ContentTable"
import {SearchInput} from "@/components/ui/SearchInput"
import {mockColumns, mockRows} from "./mockTable"


export function PlaygroundPage() {
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

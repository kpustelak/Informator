import {HeaderBlock} from "@/components/blocks/HeaderBlock.tsx";
import {Button} from "@/components/ui/Button.tsx";


export function PlaygroundPage() {
  return (
      <div>
          <HeaderBlock title={"Lorem ipsum"} description={"Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. "} >
              <Button type={"a"} variant={"secondary"}> Add page </Button>
          </HeaderBlock>
      </div>
  )
}

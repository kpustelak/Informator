import GridBlock, {type GridBlockProps} from "@/components/ui/GridBlock.tsx";


const mockData : GridBlockProps[] = [
{ name: "Test", image: "https://fastly.picsum.photos/id/966/300/300.jpg?hmac=yYZCX9ywqzdOjqEzVXCzJD7azrCWSloEPe6B79upk5s", status: "Active", isFavorite: true, link: "/",},
{ name: "Test2", image: "https://fastly.picsum.photos/id/966/300/300.jpg?hmac=yYZCX9ywqzdOjqEzVXCzJD7azrCWSloEPe6B79upk5s", status: "Active", isFavorite: false, link: "/",},
{ name: "Test3", image: "https://fastly.picsum.photos/id/966/300/300.jpg?hmac=yYZCX9ywqzdOjqEzVXCzJD7azrCWSloEPe6B79upk5s", status: "Active", isFavorite: false, link: "/",}
]

export default function PlaygroundPage() {
    return(
        <div className="grid grid-rows-6">
            {mockData.map((item,i) => {
                <GridBlock name={item.name} image={item.image} status={item.status} isFavorite={item.isFavorite} link={item.link} />
            })}
        </div>
    )
}
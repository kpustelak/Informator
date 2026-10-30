import { GridBlock, type GridBlockProps} from "@/components/ui/GridBlock.tsx";


const mockData : GridBlockProps[] = [
    { name: "Test", image: "https://fastly.picsum.photos/id/327/200/300.jpg?hmac=4XafWFg8DGNzz5ATxgKAXnhZmeCXdFEtK86ehmyQlE4", status: "Active", isFavorite: true, link: "/",},
    { name: "Test2", image: "https://fastly.picsum.photos/id/966/300/300.jpg?hmac=yYZCX9ywqzdOjqEzVXCzJD7azrCWSloEPe6B79upk5s", status: "Active", isFavorite: false, link: "/",},
    { name: "Test", image: "https://fastly.picsum.photos/id/966/300/300.jpg?hmac=yYZCX9ywqzdOjqEzVXCzJD7azrCWSloEPe6B79upk5s", status: "Active", isFavorite: true, link: "/",},
    { name: "Test2", image: "https://fastly.picsum.photos/id/966/300/300.jpg?hmac=yYZCX9ywqzdOjqEzVXCzJD7azrCWSloEPe6B79upk5s", status: "Active", isFavorite: false, link: "/",},
    { name: "Test", image: "https://fastly.picsum.photos/id/966/300/300.jpg?hmac=yYZCX9ywqzdOjqEzVXCzJD7azrCWSloEPe6B79upk5s", status: "Active", isFavorite: true, link: "/",},
    { name: "Test2", image: "https://fastly.picsum.photos/id/966/300/300.jpg?hmac=yYZCX9ywqzdOjqEzVXCzJD7azrCWSloEPe6B79upk5s", status: "Active", isFavorite: false, link: "/",},
    { name: "Test", image: "https://fastly.picsum.photos/id/966/300/300.jpg?hmac=yYZCX9ywqzdOjqEzVXCzJD7azrCWSloEPe6B79upk5s", status: "Active", isFavorite: true, link: "/",},
    { name: "Test2", image: "https://fastly.picsum.photos/id/966/300/300.jpg?hmac=yYZCX9ywqzdOjqEzVXCzJD7azrCWSloEPe6B79upk5s", status: "Active", isFavorite: false, link: "/",},
]

export function PlaygroundPage() {
    return(
        <div className="gap-y-6 flex flex-col">
            <hr/>
            <div className="grid grid-cols-5 gap-x-8 px-5">
                {mockData.map((item,i) => <GridBlock key={item.name} name={item.name} image={item.image} status={item.status} isFavorite={item.isFavorite} link={item.link} />)}
            </div>
        </div>
    )
}
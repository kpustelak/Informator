import { IoStar } from "react-icons/io5";
import { HiCheckBadge } from "react-icons/hi2";
import {Link} from "@tanstack/react-router";

export interface GridBlockProps {
    name: string,
    image: string,
    status: string,
    isFavorite: boolean,
    link: string,
}
export function GridBlock({name, image, status, isFavorite, link}: GridBlockProps ) {
    return (
        <div className="w-full">
            <div className="aspect-square overflow-hidden" ><img src={image} alt={name} className="object-cover w-full h-full"/></div>
            <div className="flex justify-between h-fit my-3">
                <div>
                    <Link to={link} className="text-ink">{name}</Link>
                    {/*Po kliknieciu mozna zmieniac status*/}
                    <div className="flex text-ink-soft gap-x-1">
                        <HiCheckBadge className="h-full" />
                        <p className="text-sm ">{status}</p>
                    </div>
                </div>
                {/*Po kliknieciu mozna zmieniac status*/}
                <div className="pr-3 flex items-center">
                    {isFavorite && <IoStar className="text-ink" size={20} />}
                </div>
            </div>
        </div>
    )
}
import { FaStar } from "react-icons/fa";
import {Link} from "@tanstack/react-router";

export interface GridBlockProps {
    name: string,
    image: string,
    status: string,
    isFavorite: boolean,
    link: string,
}
export default function GridBlock({name, image, status, isFavorite, link}: GridBlockProps ) {
    return (
        <div className="w-full aspect-square">
            <div className="h-3/4"><img src={image} alt={name}/></div>
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <Link to={link}>{name}</Link>
                    {/*Po kliknieciu mozna zmieniac status*/}
                    <p>{status}</p>
                </div>
                {/*Po kliknieciu mozna zmieniac status*/}
                {isFavorite && <FaStar />}
            </div>
        </div>
    )
}
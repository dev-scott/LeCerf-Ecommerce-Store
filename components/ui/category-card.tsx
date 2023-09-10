"use client"


import getCategory from "@/actions/get-category";
import { Category } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "./button";

interface CategoryCardProps {
    data:Category
}


const CategoryCard:React.FC<CategoryCardProps> = async({data}) => {

    const router = useRouter()

    const handlerClick=()=>{

        router.push(`/category/${data.id}`)

    }

    const category = await getCategory(data.id)

    return ( 

        
        <div  onClick={handlerClick} className="cursor-pointer overflow-hidden w-[50%] h-[400px] bg-red-700 rounded-sm flex justify-center items-center  " >{data.name}
        
        <div>

        <h1>{data.name}</h1>
        <Button className="w-1/6"> View all</Button>
        </div>




        <Image width="100" height="100" src={category.billboard.imageUrl} alt="image" className="object-cover " />

        
        </div>
     );
}
 
export default CategoryCard;


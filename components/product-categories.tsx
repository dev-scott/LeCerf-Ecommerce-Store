import { Category } from "@/types";
import CategoryCard from "./ui/category-card";

interface ProductCategoriesProps {

    data: Category[]

}

const ProductCategories: React.FC<ProductCategoriesProps> = ({ data }) => {
    return (<div className=" flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 space-y-3">
        <h3>
            Here is my category
        </h3>
        <div className="flex flex-row justify-center items-center  gap-x-2">
            {data.map((item) => (

                <CategoryCard key={item.id} data={item} />
            ))}
        </div>
    </div>);
}

export default ProductCategories;


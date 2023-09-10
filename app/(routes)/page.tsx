import getBillboard from "@/actions/get-billboard";
import getCategories from "@/actions/get-categories";
import getProducts from "@/actions/get-products";
import Hero from "@/components/hero";
import ProductCategories from "@/components/product-categories";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("760ec52c-0c28-4feb-bec3-9d1ea352bb53");

  const categories = await getCategories();


  return (
    <Container>
      <div className="space-y-10 pb-10">
        {/* <Billboard 
          data={billboard}
        /> */}
        <Hero/>
        <ProductCategories data = {categories} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
};

export default HomePage;

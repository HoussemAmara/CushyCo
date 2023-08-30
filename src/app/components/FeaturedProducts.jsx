import { FeaturedProductCard } from ".";
import { User, Layout } from "react-feather";
export default function FeatureProducts() {
  return (
    <div className="bg-[#f3f2fa] flex flex-col justify-around h-[80vh] items-center">
      <div>
        <h1 className="relative max-w-2xl mb-4 text-5xl tracking-wide font-bold leading-none dark:text-black ">
          Featured Products
          <span className="absolute -bottom-5 left-[37.5%]  h-1 w-1/4 bg-[#ac7c5c]"></span>
        </h1>
      </div>
      <div className="flex flex-row">
        <FeaturedProductCard
          imageSrc="/product-7.jpeg"
          imageAlt="author picture"
          productName="Entertainment Center"
          price="$599.99"
        ></FeaturedProductCard>
        <FeaturedProductCard
          imageSrc="/furniturePexel1.jpg"
          imageAlt="author picture"
          productName="Sova"
          price="$199.99"
        ></FeaturedProductCard>
        <FeaturedProductCard
          imageSrc="/product-8.jpeg"
          imageAlt="author picture"
          productName="Table and Chairs Ensemble"
          price="$299.99"
        ></FeaturedProductCard>
      </div>
      <button className="px-8 py-3 font-regular rounded bg-darkBrown text-lightBrown tracking-wider hover:bg-lightBrown hover:text-black duration-300">
        ALL PRODUCTS
      </button>
    </div>
  );
}

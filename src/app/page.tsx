import { Metadata } from "next";
import { Hero, FeaturedProducts, CustomFurniture, Newsletter } from "./components";
export const metadata: Metadata = {
  title: "CoshyCo",
  openGraph: {
    title: "Home",
  },
};
export default function Home() {
  return (
    <>
      <Hero></Hero>
      <FeaturedProducts></FeaturedProducts>
      <CustomFurniture></CustomFurniture>
      <Newsletter></Newsletter>
    </>
  );
}

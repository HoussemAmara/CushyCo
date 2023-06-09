import { Metadata } from "next";
import { Hero, FeaturedProducts } from "./components";
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
    </>
  );
}

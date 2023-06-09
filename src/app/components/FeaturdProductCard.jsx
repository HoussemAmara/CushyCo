import Image from "next/image";
export default function FeatureProductCard() {
  return (
    <div className="w-[25vw] mx-[2vw]">
      <Image
        src="/product-7.jpeg"
        width={500}
        height={500}
        alt="Picture of the author"
        className="rounded-md"
      />
      <div className="flex flex-row justify-between">
        <h1>Entertainment Center</h1>
        <h1 className="text-darkBrown">$599.99</h1>
      </div>
    </div>
  );
}

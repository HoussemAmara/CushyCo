import Image from "next/image";
import { Search } from "react-feather";
export default function FeatureProductCard({
  imageSrc,
  imageAlt,
  productName,
  price,
}) {
  return (
    <div className="w-[25vw] mx-[2vw]">
      <div className=" relative ">
        <Image
          src={imageSrc}
          width={500}
          height={500}
          alt={imageAlt}
          className="rounded-md object-cover h-48 w-96 ..."
        />
        <div className="absolute inset-0 flex items-center rounded-md bg-black justify-center opacity-0 tracking-wider hover:opacity-100 hover:bg-opacity-50	 duration-300">
          <Search className="text-white rounded-full bg-darkBrown p-2 w-[3vw] h-[3vw] " />
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <h1>{productName}</h1>
        <h1 className="text-darkBrown">{price}</h1>
      </div>
    </div>
  );
}

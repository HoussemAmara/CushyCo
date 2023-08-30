import Image from "next/image";
export default function CustomFurnitureCard({
  image,
  CardDescription,
  CardTitle,
  titleHref,
}) {
  return (
    <>
      <div className="overflow-hidden bg-[#c5a491] rounded-lg">
        <div className="w-16 h-16 flex justify-center items-center mt-[5vh] mx-auto bg-[#eaded7] rounded-full ">
          <Image
            src={image}
            width={100}
            height={100}
            className="object-cover p-2"
          />
        </div>
        <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
          <h3>
            <a
              href={titleHref ? titleHref : "/#"}
              className="my-4 text-2xl md:text-3xl tracking-wide font-bold leading-none  text-[#453227]"
            >
              {CardTitle}
            </a>
          </h3>
          <p className="mt-4 text-base leading-relaxed mb-7 text-body-color">
            {CardDescription}
          </p>
        </div>
      </div>
    </>
  );
}

import CustomFurnitureCard from "./CustomFurnitureCard";
export default function CustomFurniture() {
  return (
    <>
      <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20 h-full bg-[#eaded7]">
        <div className="container mx-auto">
          <div class="md:flex justify-between">
            <h1 className="text-[#453227] mb-4 text-3xl md:text-4xl tracking-wide font-bold leading-none md:shrink-0 md:w-1/2 md:pr-8">
              Custom Furniture <br />
              Built Only For You
            </h1>
            <p className="text-[#6b6b6b] max-w-md text-lg">
              Elevate your living space with unique custom furniture pieces
              crafted to match your style and preferences.
            </p>
          </div>
          <div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
            <CustomFurnitureCard
              image="/location.png"
              CardTitle=" Mission"
              titleHref="/#"
              btnHref="/#"
              CardDescription="Guided by a vision of innovation and excellence, our mission is to create furniture that speaks to your 
              individuality"
            />
            <CustomFurnitureCard
              image="/stone.png"
              CardTitle=" Vision"
              CardDescription=" Envisioning a world where furniture transcends its functional purpose, we aim to inspire lifestyles that 
              are both luxurious and sustainable."
            />
            <CustomFurnitureCard
              image="/scroll.png"
              CardTitle="History"
              CardDescription=" Envisioning a world where furniture transcends its functional purpose, we aim to inspire lifestyles that 
              are both luxurious and sustainable"
            />
          </div>
        </div>
      </section>
    </>
  );
}

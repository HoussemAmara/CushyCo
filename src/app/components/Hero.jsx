export default function Hero() {
  return (
    <section>
      <div className="container flex flex-col justify-center mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="max-w-2xl mb-4 text-xl font-semibold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-black">
            Design Your Comfort Zone
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-800 text-justify">
            Transform your living space into a haven of style and comfort, where
            elegance meets functionality in every furniture piece. Explore our
            curated collection of timeless designs, and create a home that
            reflects your unique taste and personality.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 font-regular rounded bg-[#ac7c5c] text-[#e7cda6] tracking-wider hover:bg-[#e7cda6] hover:text-black duration-300"
            >
              SHOP NOW
            </a>
          </div>
        </div>
        <div className="relative flex items-center justify-center h-3/5 w-2/5">
          <div className="shape bg-[#ac7c5c] rounded-md absolute left-10 bottom-0 z-0" />
          <img
            src="/table.jpg"
            alt=""
            className="img1 rounded-md lg:mt-0 lg:col-span-5 lg:flex relative z-10"
          />
          <img
            src="/worker.jpg"
            alt=""
            className="absolute img2 rounded-md bottom-0 left-0 w-5/12 z-10"
          />
        </div>
      </div>
    </section>
  );
}

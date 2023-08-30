export default function Newsletter() {
  return (
    <>
      <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20 h-full">
        <div className="container mx-auto">
          <h1 className="text-black mb-4 text-3xl md:text-4xl tracking-wide font-bold leading-none ">
            Join our newsletter and get 20% off
          </h1>
          <div className="md:flex justify-between">
            <p className="text-[#6b6b6b] max-w-md text-lg">
              Unlock exclusive offers and stay connected with the latest trends
              by joining our newsletter. Sign up today and enjoy a 20% discount
              on your next purchase as a token of our appreciation for being
              part of our community.
            </p>
            <div className="flex mt-4 h-14">
              <input
                type="text"
                className="px-4 border border-[#6b6b6b] rounded-l"
                placeholder="Your email address"
              />
              <button className="px-8 font-regular rounded-r bg-darkBrown text-lightBrown tracking-wider hover:bg-lightBrown hover:text-black duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

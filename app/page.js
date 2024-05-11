import Search from "@/components/global/search-bar/Search";

const RootPage = () => {
  return (
    <>
      <div className="hero custom-min-h bg-[url('/assets/images/hero-bg.webp')]">
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="text-white font-bold text-3xl lg:text-5xl my-4 text-center lg:w-8/12 mx-auto">
              Hotel for memorable moments rich in emotions
            </h1>
            <p className="my-2  text-center">
              We have 459 rooms spread throuout Indonesia with room standards
              equivalent to 5 star hotels.
            </p>
            <Search />
          </div>
        </div>
      </div>
    </>
  );
};

export default RootPage;

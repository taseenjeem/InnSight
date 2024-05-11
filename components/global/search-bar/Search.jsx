const Search = ({ fromList }) => {
  return (
    <>
      <div className="lg:max-h-[250px] mt-6">
        <div
          id="searchParams"
          className={`${
            fromList && "!shadow-none"
          } bg-[#d5e8df45] backdrop-blur-lg w-full h-full py-5 lg:py-12 px-3 lg:px-8 rounded-xl border border-black/10 shadow-lg lg:flex items-center [&>*]:flex-1 [&>*]:px-4 [&>div>span]:mb-3 space-y-5 lg:space-y-0`}
        >
          <div className="form-control">
            <label className="label" htmlFor="destination">
              <span className="mx-auto font-bold text-white">Destination</span>
            </label>
            <select
              name="destination"
              id="destination"
              className="select select-bordered bg-transparent w-full"
            >
              <option className="text-black" value="Bali">
                Bali
              </option>
              <option className="text-black" value="Bali">
                Cox&apos;s Bazar
              </option>
              <option className="text-black" value="Bali">
                Sylhet
              </option>
              <option className="text-black" value="Bali">
                Saint Martin
              </option>
              <option className="text-black" value="Bali">
                Bali
              </option>
            </select>
          </div>

          <div className="form-control">
            <label className="label" htmlFor="checkin">
              <span className="mx-auto font-bold text-white">Check In</span>
            </label>
            <input
              type="date"
              name="checkin"
              id="checkin"
              className="input input-bordered w-full bg-transparent"
            />
          </div>

          <div className="form-control">
            <label className="label" htmlFor="checkout">
              <span className="mx-auto font-bold text-white">Check Out</span>
            </label>
            <input
              type="date"
              name="checkout"
              id="checkout"
              className="input input-bordered w-full bg-transparent"
            />
          </div>
        </div>
      </div>

      <button className="btn btn-secondary mt-5">
        🔍️ {fromList ? "Modify Search" : "Search your destination"}
      </button>
    </>
  );
};

export default Search;

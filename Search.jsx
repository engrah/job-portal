const Search = () => {
  return (
    <div
      className="container-fluid bg-primary mb-0 fadeIn"
      style={{
        animationDelay: "0.1s",
        padding: "50px",
      }}
    >
      <div className="container  px-12 py-12 bg-green-300 w-full ">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
          <div className="col-span-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <div className="col-span-1">
                <input
                  className="form-control border-0 w-full"
                  placeholder="Keyword"
                  type="text"
                />
              </div>
              <div className="col-span-1">
                <select className="form-select border-0 w-full">
                  <option selected>Category</option>
                  <option value="1">Category 1</option>
                  <option value="2">Category 2</option>
                  <option value="3">Category 3</option>
                </select>
              </div>
              <div className="col-span-1">
                <select className="form-select border-0 w-full">
                  <option selected>Location</option>
                  <option value="1">Location 1</option>
                  <option value="2">Location 2</option>
                  <option value="3">Location 3</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <button className="btn bg-dark text-white border-4 bg-slate-600 w-full">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

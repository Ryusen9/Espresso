const AddCoffee = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <form action="add-coffee" className="border-2 p-5">
        <p className="text-center text-3xl font-bold">Coffee Information</p>
        <div className="flex gap-3">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Enter Coffee Name: </span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Chef: </span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        </div>
        <div className="flex gap-3">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Supplier: </span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Taste: </span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        </div>
        <div className="flex gap-3">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Category: </span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Details: </span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        </div>
        <div className="flex gap-3">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Enter Photo: </span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        </div>
        <div className="flex w-full items-end justify-end mt-3">
            <button className="btn">Brew Coffee</button>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;

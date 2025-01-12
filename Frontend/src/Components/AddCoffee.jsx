import { useRef } from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const form = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);

    const name = formData.get("name");
    const chef = formData.get("chef");
    const supplier = formData.get("supplier");
    const taste = formData.get("taste");
    const category = formData.get("category");
    const details = formData.get("details");
    const photo = formData.get("photo");

    const newCoffee = { name, chef, supplier, taste, category, details, photo };
    console.log(newCoffee);

    fetch("https://espresso-server-lake.vercel.app/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Coffee Added!",
            text: "Your coffee has been added successfully!",
            icon: "success",
            confirmButtonText: "Close",
          });
        }
      });
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <form ref={form} className="border-2 p-5" onSubmit={handleSubmit}>
        <p className="text-center text-3xl font-bold">Coffee Information</p>
        <div className="flex gap-3">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Enter Coffee Name: </span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              name="name"
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
              name="chef"
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
              name="supplier"
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
              name="taste"
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
              name="category"
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
              name="details"
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
              name="photo"
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

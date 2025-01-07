import { useRef } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;
  const form = useRef();
  const handleUpdate = (event) => {
    event.preventDefault();
    console.log(_id)
    const formData = new FormData(form.current);

    const name = formData.get("name");
    const chef = formData.get("chef");
    const supplier = formData.get("supplier");
    const taste = formData.get("taste");
    const category = formData.get("category");
    const details = formData.get("details");
    const photo = formData.get("photo");

    const updatedCoffee = {name, chef, supplier, taste, category, details, photo};
    const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger",
          },
          buttonsStyling: false,
        });
        swalWithBootstrapButtons
          .fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, Update it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true,
          })
          .then((result) => {
            if (result.isConfirmed) {
                console.log(_id)
              fetch(`http://localhost:3000/coffee/${_id}`, {
                method: 'PUT',
                headers: {
                  'content-type' : 'application/json'
                },
                body: JSON.stringify(updatedCoffee),
              }).then(res => res.json()).then(data => {
                if(data.modifiedCount > 0) {
                    swalWithBootstrapButtons.fire({
                        title: "Updated!",
                        text: "Your coffee has been Updated.",
                        icon: "success",
                      });
                }
              })
            } else if (
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "Your imaginary file is safe :)",
                icon: "error",
              });
            }
          })
          .catch((error) => {
            console.error("Error updating coffee:", error);
            swalWithBootstrapButtons.fire({
              title: "Error!",
              text: "An error occurred while updating your coffee.",
              icon: "error",
            });
          });;
  }
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <form ref={form} onSubmit={handleUpdate} className="border-2 p-5">
        <p className="text-center text-3xl font-bold">
          Update Coffee Information: {name}
        </p>
        <div className="flex gap-3">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Enter Coffee Name: </span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              name="name"
              defaultValue={name}
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
              defaultValue={chef}
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
              defaultValue={supplier}
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
              defaultValue={taste}
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
              defaultValue={category}
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
              defaultValue={details}
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
              defaultValue={photo}
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>
        <div className="flex w-full items-end justify-end mt-3">
          <button className="btn">Update Coffee</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffee;

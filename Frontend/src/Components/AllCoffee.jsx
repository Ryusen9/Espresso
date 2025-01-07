import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const AllCoffee = ({ coffees }) => {
  const handleDelete = (e) => {
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
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:3000/coffee/${e}`, {
            method: 'DELETE'
          }).then(res => res.json()).then(data => {
            if(data.deletedCount > 0) {
                swalWithBootstrapButtons.fire({
                    title: "Deleted!",
                    text: "Your coffee has been deleted.",
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
      });
  };
  return (
    <div className="min-h-screen w-full p-8 flex flex-col gap-5 items-center justify-center">
      <p className="text-2xl font-semibold">
        Available Coffees: {coffees.length}
      </p>
      <div id="Cards">
        <div>
          <Link to={"/addCoffee"}>
            <button className="btn">Add Coffee</button>
          </Link>
        </div>
        <div>
          {coffees.map((coffee) => {
            return (
              <div
                key={coffee._id}
                className="card lg:card-side bg-base-100 shadow-xl"
              >
                <figure>
                  <img src={coffee.image} alt="Coffee-image" />
                </figure>
                <div className="card-body flex flex-row gap-3">
                  <div>
                    <p>Coffee name: {coffee.name}</p>
                    <p>Chef name: {coffee.chef}</p>
                    <p>Supplier name: {coffee.Supplier}</p>
                    <p>Taste: {coffee.taste}</p>
                    <p>Category: {coffee.category}</p>
                    <p>Details: {coffee.details}</p>
                  </div>
                  <div className="flex flex-col gap-4 justify-center items-center">
                    <Link to={`/updateCoffee/${coffee._id}`}>
                      <button className="btn btn-primary">Edit</button>
                    </Link>
                    <button
                      className="btn btn-error"
                      onClick={() => handleDelete(coffee._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

AllCoffee.propTypes = {
  coffees: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AllCoffee;

import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const SignIn = () => {
  const { createUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photo = form.photo.value;
    console.log(`Email: ${email}, Password: ${password}`);
    createUser(email, password)
      .then((result) => {
        const newUser = { name, email, photo };
        fetch("https://espresso-server-lake.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((result) => result.json())
          .then((data) => console.log("User created : ", data));
        console.log(result);
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Signed in successfully",
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Error signing in",
          text: error.message,
        });
      });
  };
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <form
        className="p-5 w-80 bg-gray-300 flex flex-col items-start justify-center gap-5 rounded-md border-2 border-gray-800 shadow-[4px_4px_0px_#323232]"
        onSubmit={handleSubmit}
      >
        <p className="font-bold text-lg text-gray-800">
          Welcome,
          <span className="block font-semibold text-gray-600 text-base">
            sign in to continue
          </span>
        </p>

        <button className="oauthButton flex justify-center items-center gap-2 w-64 h-10 rounded-md border-2 border-gray-800 bg-white shadow-[4px_4px_0px_#323232] text-base font-semibold text-gray-800 relative overflow-hidden transition-all hover:text-gray-200 hover:bg-gray-900">
          <svg className="w-6 h-6" viewBox="0 0 24 24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            ></path>
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            ></path>
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            ></path>
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            ></path>
          </svg>
          Continue with Google
        </button>

        <div className="separator flex items-center justify-center w-full gap-2">
          <div className="w-24 h-1 rounded bg-gray-600"></div>
          <span className="font-semibold text-gray-800">OR</span>
          <div className="w-24 h-1 rounded bg-gray-600"></div>
        </div>

        <input
          type="text"
          placeholder="Name"
          name="name"
          className="w-64 h-10 rounded-md border-2 border-gray-800 bg-white shadow-[4px_4px_0px_#323232] font-semibold text-gray-800 px-3 outline-none"
        />

        <input
          type="email"
          placeholder="Email"
          name="email"
          className="w-64 h-10 rounded-md border-2 border-gray-800 bg-white shadow-[4px_4px_0px_#323232] font-semibold text-gray-800 px-3 outline-none"
        />

        <input
          type="text"
          placeholder="Photo URL"
          name="photo"
          className="w-64 h-10 rounded-md border-2 border-gray-800 bg-white shadow-[4px_4px_0px_#323232] font-semibold text-gray-800 px-3 outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          className="w-64 h-10 rounded-md border-2 border-gray-800 bg-white shadow-[4px_4px_0px_#323232] font-semibold text-gray-800 px-3 outline-none"
        />

        <button className="oauthButton flex justify-center items-center gap-2 w-64 h-10 rounded-md border-2 border-gray-800 bg-white shadow-[4px_4px_0px_#323232] text-base font-semibold text-gray-800 relative overflow-hidden transition-all hover:text-gray-200 hover:bg-gray-900">
          Continue
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M6 17L11 12L6 7"></path>
            <path d="M13 17L18 12L13 7"></path>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default SignIn;

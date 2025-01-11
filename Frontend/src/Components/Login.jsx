import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
    const { signInUser } = useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signInUser(email, password).then(result => console.log(result.user))
    }
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div onSubmit={handleSubmit} className="w-80 rounded-lg bg-gray-900 p-8 text-gray-100">
        <p className="text-center text-xl font-bold">Login</p>
        <form className="mt-6">
          <div className="mt-1 text-sm">
            <label htmlFor="username" className="block text-gray-400 mb-1">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder=""
              className="w-full rounded-md border border-gray-700 bg-gray-900 px-4 py-3 text-gray-100 focus:border-indigo-400 focus:outline-none"
            />
          </div>
          <div className="mt-1 text-sm">
            <label htmlFor="password" className="block text-gray-400 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder=""
              className="w-full rounded-md border border-gray-700 bg-gray-900 px-4 py-3 text-gray-100 focus:border-indigo-400 focus:outline-none"
            />
            <div className="flex justify-end text-xs text-gray-400 mt-2">
              <a href="#" className="hover:underline hover:text-indigo-400">
                Forgot Password?
              </a>
            </div>
          </div>
          <button type="submit" className="mt-6 w-full rounded-md bg-indigo-400 py-3 text-center font-semibold text-gray-900">
            Sign in
          </button>
        </form>
        <div className="flex items-center pt-4">
          <div className="h-px flex-1 bg-gray-700"></div>
          <p className="px-3 text-sm text-gray-400">
            Login with social accounts
          </p>
          <div className="h-px flex-1 bg-gray-700"></div>
        </div>
        <div className="flex justify-center mt-4">
          <button
            aria-label="Log in with Google"
            className="rounded-sm p-3 bg-transparent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="h-5 w-5 fill-current"
            >
              <path d="..." />
            </svg>
          </button>
          <button
            aria-label="Log in with Twitter"
            className="rounded-sm p-3 bg-transparent ml-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="h-5 w-5 fill-current"
            >
              <path d="..." />
            </svg>
          </button>
          <button
            aria-label="Log in with GitHub"
            className="rounded-sm p-3 bg-transparent ml-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="h-5 w-5 fill-current"
            >
              <path d="..." />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

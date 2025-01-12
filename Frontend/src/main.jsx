import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./Components/AddCoffee.jsx";
import UpdateCoffee from "./Components/UpdateCoffee.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import SignIn from "./Components/SignIn.jsx";
import Users from "./Components/Users.jsx";
import Login from "./Components/Login.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => fetch("https://espresso-server-lake.vercel.app/coffee"),
  },
  {
    path: "/addCoffee",
    element: <AddCoffee />,
  },
  {
    path: "/updateCoffee/:id",
    element: <UpdateCoffee />,
    loader: ({ params }) =>
      fetch(`https://espresso-server-lake.vercel.app/coffee/${params.id}`),
  },
  {
    path: "/signup",
    element: <SignIn />,
  },
  {
    path: "/users",
    element: <Users />,
    loader: () => fetch("https://espresso-server-lake.vercel.app/users"),
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);

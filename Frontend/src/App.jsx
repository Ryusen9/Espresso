import { useLoaderData } from "react-router-dom"
import HomeLayout from "./Layouts/HomeLayout"

function App() {
  const coffees = useLoaderData();

  return (
    <>
      <HomeLayout coffees={coffees}/>
    </>
  )
}

export default App

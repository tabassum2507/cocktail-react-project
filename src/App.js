import React from "react";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import About from "./pages/About"
import Error from "./pages/Error"
import SingleCocktail from "./pages/SingleCocktail"

// const Layout = () => {
//   return(
//     <div className="app">
//       <Navbar />
//     </div>
//   );
// };


const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Layout />,
  //   children: [ 
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  }, 
  {
    path: "/*",
    element: <Error />
  },
  {
    path: "/cocktail/:id",
    element: <SingleCocktail />
  },

  
])

function App() {
  return (
     <div>
        <Navbar />
        <RouterProvider router={router} />
     </div>
  );
}

export default App;

import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { NavBar } from "./core/components/layout/Navbar";
import { Home } from "./features/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Outlet />
      </>
    ),
    errorElement: <div>oh</div>,
    children: [
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

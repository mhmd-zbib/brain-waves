import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./features/home";
import Navbar from "./core/components/layout/Navbar/Navbar";
import { Sidebar } from "./features/Sidebar";
import { Feed } from "./features/Feed";
import { SidePanel } from "./core/components/layout/SidePanel";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <div className="  grid gap-3  sm:grid-cols-12 container mx-auto  relative   ">
          <Sidebar />
          <div className=" sm:col-span-12 lg:col-span-9 xl:col-span-6 overflow-y-auto mt-[0.5rem]">
            <Outlet />
          </div>
          <SidePanel />
        </div>
      </>
    ),
    errorElement: <div>oh</div>,
    children: [
      {
        path: "home",
        element: <Feed />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

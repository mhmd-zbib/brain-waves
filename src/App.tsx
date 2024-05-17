import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
// import Navbar from "./core/components/layout/Navbar/Navbar";
import { SidePanel } from "./core/components/layout/SidePanel";
import { Feed } from "./features/Feed";
import { Sidebar } from "./features/Sidebar";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="  grid gap-3  sm:grid-cols-12 container mx-auto  relative    ">
        <Sidebar />
        <div className=" sm:col-span-12 lg:col-span-9 xl:col-span-6   ">
          <Outlet />
        </div>
        <SidePanel />
      </div>
    ),
    errorElement: <div>oh</div>,
    children: [
      {
        path: "/",
        element: <Feed />,
      },
    ],
  },
]);

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;

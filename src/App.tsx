import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
// import Navbar from "./core/components/layout/Navbar/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SidePanel } from "./core/components/layout/SidePanel";
import QuestionDetails from "./features/Questions/QuestionDetails/QuestionDetails";
import Questions from "./features/Questions/QuestionsList";
import { Sidebar } from "./features/Sidebar";

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
        path: "q/home",
        element: <Questions />,
      },

      {
        path: "q/:major/:course/:id",
        element: <QuestionDetails />,
      },

      {
        path: "q/:major",
      },
      { path: "q/:major/:course", element: <Questions /> },
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

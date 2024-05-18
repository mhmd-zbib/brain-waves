import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SidePanel } from "./core/components/layout/SidePanel";
import QuestionDetails from "./features/Questions/QuestionDetails/QuestionDetails";
import Questions from "./features/Questions/QuestionsList";
import { Sidebar } from "./core/components/layout/Sidebar";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="grid gap-3 sm:grid-cols-12 container mx-auto relative">
          <Sidebar />
          <div className="sm:col-span-12 lg:col-span-9 xl:col-span-6">
            <Routes>
              <Route path="*" element={<Navigate to="q/home" />} />
              <Route path="q/home" element={<Questions />} />
              <Route
                path="q/:major/:course/:id"
                element={<QuestionDetails />}
              />
              <Route path="q/:major" element={<Questions />} />
              <Route path="q/:major/:course" element={<Questions />} />
            </Routes>
          </div>
          <SidePanel />
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

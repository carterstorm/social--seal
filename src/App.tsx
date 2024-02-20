import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { toMain } from "./routes";
import LayoutPage from "./pages/LayoutPage";
import MainPage from "./pages/MainPage";

const router = createBrowserRouter([
  {
    path: toMain(),
    element: <LayoutPage />,
    children: [
      {
        path: toMain(),
        element: <MainPage />,
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}

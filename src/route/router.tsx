import { createBrowserRouter } from "react-router-dom";
import { HomeScreen } from "@pages/HomeScreen.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
    children: [],
  },
]);

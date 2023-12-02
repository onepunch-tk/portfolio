import { createBrowserRouter } from "react-router-dom";
import { RootScreen } from "@pages/RootScreen.tsx";
import { HomeScreen } from "@pages/HomeScreen.tsx";
import { ROOT_ROUTES } from "@route/constants.ts";
import { AboutMeScreen } from "@pages/AboutMeScreen.tsx";
import { ResumeScreen } from "@pages/ResumeScreen.tsx";
import { ContactScreen } from "@pages/ContactScreen.tsx";

export const router = createBrowserRouter([
  {
    path: ROOT_ROUTES.ROOT,
    element: <RootScreen />,
    children: [
      { path: ROOT_ROUTES.ROOT, element: <HomeScreen /> },
      { path: ROOT_ROUTES.ABOUT_ME, element: <AboutMeScreen /> },
      { path: ROOT_ROUTES.RESUME, element: <ResumeScreen /> },
      { path: ROOT_ROUTES.CONTACT, element: <ContactScreen /> },
    ],
  },
]);

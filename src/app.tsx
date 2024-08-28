import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";

import { HomePage } from "./pages/HomePage";
import { TeamPage } from "./pages/TeamPage";
import { DetailsPage } from "./pages/DetailsPage";
import { ContactPage } from "./pages/ContactPage";
import { ServicesPage } from "./pages/ServicesPage";

import { LanguageProvider } from "./lib/LanguageProvider";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Navigate to="/" replace />
  },
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/contact",
    element: <ContactPage />
  },
  {
    path: "/services",
    element: <ServicesPage />
  },
  {
    path: "/project/:ProjectID",
    element: <DetailsPage />
  },
  {
    path: "/team/:EmployerID",
    element: <TeamPage />
  }
])

export function App() {
  return (
    <>
      <LanguageProvider>
        <NavBar />
        <RouterProvider router={router} />
        <Footer />
      </LanguageProvider>
    </>
  )

}

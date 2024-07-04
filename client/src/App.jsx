import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import LandingPage from "./pages/landingPage";
import AuthPage from "./pages/authPage";

import "./App.css";

// Define the routes
const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "*",
    element: <LandingPage />,
  },
  {
    path: "/signup",
    element: <AuthPage />,
  },
  {
    path: "/signin",
    element: <AuthPage />,
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

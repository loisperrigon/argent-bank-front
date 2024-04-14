// routes.js
import { createBrowserRouter } from "react-router-dom";

import SignIn from "../Pages/signIn/SignIn";

import Acceuil from "../Pages/Acceuil/Acceuil";
import User from "../Pages/User/User";

const routerConfig = [
  {
    path: "/",
    element: (
      <>
        <Acceuil />
      </>
    ),
  },
  {
    path: "/SignIn",
    element: (
      <>
        <SignIn />
      </>
    ),
  },
  {
    path: "/User",
    element: (
      <>
        <User />
      </>
    ),
  },
];

export const router = createBrowserRouter(routerConfig);

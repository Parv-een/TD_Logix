import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";

import Layout from "../Layout/Layout";

const routes = createRoutesFromElements(
  <>
    <Route path="home" element={<HomePage />}></Route>

    <Route path="login" element={<LoginPage />}></Route>

    <Route path="layout" element={<Layout />}></Route>

    <Route path="*" element={<div>Not Found Page</div>}></Route>
  </>
);

const router = createBrowserRouter(routes);
export default router;

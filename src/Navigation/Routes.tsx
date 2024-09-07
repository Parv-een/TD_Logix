import {
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import LoginPage from "../Pages/LoginPage/LoginPage";

import Layout from "../Layout/Layout";
import Driver from "../Pages/DriversList/Driver";
import VehicleList from "../Pages/Vehicle/VehicleList";
import LandingPage from "../Pages/LandingPage/LandingPage";

const routes = createRoutesFromElements(
  <>
    <Route path="layout" element={<Layout />}></Route>

    <Route path="*" element={<div>Not Found Page</div>}></Route>

    <Route path="login" element={<LoginPage />}></Route>
    <Route path="landingPage" element={<Layout />}>
      <Route index element={<LandingPage />}></Route>
    </Route>
    <Route path="/" element={<Layout />}>
      <Route path="driver" element={<Driver />}></Route>

      <Route path="trucks" element={<VehicleList />}></Route>

      <Route path="home" element={<HomePage />}></Route>
    </Route>
  </>
);

const router = createBrowserRouter(routes);
export default router;

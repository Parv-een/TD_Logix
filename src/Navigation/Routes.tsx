import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import LoginPage from "../Pages/LoginPage/LoginPage";

import Layout from "../Layout/Layout";

import VehicleList from "../Pages/Vehicle/VehicleMainPage";
import LandingPage from "../Pages/LandingPage/LandingPage";
import DriverMainPage from "../Pages/DriversList/DriverMainPage";
import AddDriver from "../Pages/DriversList/AddDriver";
import AddVehicle from "../Pages/Vehicle/AddVehicle";
import ItemDetailPage from "../Components/ItemDetailPage";

const routes = createRoutesFromElements(
  <>
    <Route path="layout" element={<Layout />}></Route>

    <Route path="*" element={<div>Not Found Page</div>}></Route>

    <Route path="login" element={<LoginPage />}></Route>
    <Route path="landingPage" element={<Layout />}>
      <Route index element={<LandingPage />}></Route>
    </Route>
    <Route path="/" element={<Layout />}>
      <Route path="add" element={<AddDriver />}></Route>
      <Route path="append" element={<AddVehicle />}></Route>
      <Route path="driver" element={<DriverMainPage />}></Route>
      <Route path="/items/:itemID" element={<ItemDetailPage />}></Route>

      <Route path="trucks" element={<VehicleList />}></Route>

      <Route path="home" element={<LandingPage />}></Route>
    </Route>
  </>
);

const router = createBrowserRouter(routes);
export default router;

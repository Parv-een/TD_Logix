// PaginationComponent.js
import { useCallback, useState } from "react";
import { Button, Container } from "react-bootstrap";
import classes from "./Pagination.module.css";
import Driverlist from "../models/DriverList";
import TruckList from "../models/TruckList";
import { vehicleDummy } from "../DummyData/VehicleDummyData";
import { driverDummy } from "../DummyData/DriverDummyData";
import GridList from "./GridList";

const PRODUCTS_PER_PAGE = 3;

const Pagination = () => {
  const [vehicle] = useState<TruckList[]>({ ...vehicleDummy });
  const [itemOnPage, setItemOnPage] = useState<Driverlist[] | TruckList[]>(
    driverDummy || vehicleDummy.slice(0, PRODUCTS_PER_PAGE)
  );
  const [activePage, setActivePage] = useState<number>(1);

  const createPagination = useCallback(() => {
    const pages = [];
    const totalPages = Math.ceil(vehicle.length / PRODUCTS_PER_PAGE);
    const onPageHandler = (pageNumber: number) => {
      const start = (activePage - 1) * PRODUCTS_PER_PAGE;
      const end = start + PRODUCTS_PER_PAGE;
      setItemOnPage(vehicle.slice(start, end));
      setActivePage(pageNumber);
    };
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li key={i} className={activePage === i ? classes.active : " "}>
          <Button onClick={() => onPageHandler(i)}>{i}</Button>
        </li>
      );
    }
    return <ul className={classes.pagination}>{pages}</ul>;
  }, [vehicle, activePage]);

  return (
    <Container>
      <GridList
        items={itemOnPage}
        itemType={"vehicle"}
        renderItem={(vehicle) => (
          <span>
            {vehicle.name}-{vehicle.make}-{vehicle.model}
          </span>
        )}
      ></GridList>
      {createPagination()}
    </Container>
  );
};

export default Pagination;

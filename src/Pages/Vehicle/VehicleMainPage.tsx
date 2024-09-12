import { useCallback, useState } from "react";
import { vehicleDummy } from "../../DummyData/VehicleDummyData";
import TruckList from "../../models/TruckList";
import GridList from "../../Components/GridList";
import { Button, Container, Row } from "react-bootstrap";
import { Form, Link } from "react-router-dom";
import classes from "./Vehicle.module.css";

const PRODUCTS_PER_PAGE = 3;

export default function VehicleMainPage() {
  const [vehicle] = useState<TruckList[]>([...vehicleDummy]);
  const [itemOnPage, setItemOnPage] = useState<TruckList[]>(
    vehicleDummy.slice(0, PRODUCTS_PER_PAGE)
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
  }, [activePage, vehicle]);
  return (
    <Container>
      <h3> Vehicle Catalogue</h3>
      <Form>
        <Row>
          {vehicle.length > 0 ? (
            <>
              <GridList
                items={itemOnPage}
                itemType="vehicle"
                renderItem={(vehicle) => (
                  <span>
                    {vehicle.name}-{vehicle.make}-{vehicle.model}
                  </span>
                )}
              />
              {createPagination()}
            </>
          ) : (
            <p> No data Found</p>
          )}
        </Row>

        <Link to="/append">
          <Button type="submit">Add</Button>
        </Link>
      </Form>
    </Container>
  );
}

import { Button, Col, Container, Row } from "react-bootstrap";
import { Form, Link } from "react-router-dom";
import Driverlist from "../../models/DriverList";
import { useCallback, useState } from "react";
import classes from "./Driver.module.css";
import GridList from "../../Components/GridList";
import { driverDummy } from "../../DummyData/DriverDummyData";

const PRODUCTS_PER_PAGE = 3;

export default function DriverMainPage() {
  const [driver] = useState<Driverlist[]>([...driverDummy]);

  const [itemOnPage, setItemOnPage] = useState<Driverlist[]>(
    driverDummy.slice(0, PRODUCTS_PER_PAGE)
  );
  const [activePage, setActivePage] = useState<number>(1);

  const createPagination = useCallback(() => {
    const pages = [];

    const totalPages = Math.ceil(driver.length / PRODUCTS_PER_PAGE);
    const onPageHandler = (pageNumber: number) => {
      const start = (activePage - 1) * PRODUCTS_PER_PAGE;
      const end = start + PRODUCTS_PER_PAGE;
      setItemOnPage(driver.slice(start, end));
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
  }, [activePage, driver]);

  return (
    <>
      <Form>
        <h3> Members List</h3>
        <Container>
          <Row>
            {driver.length > 0 ? (
              <>
                <GridList
                  items={itemOnPage}
                  itemType="driver"
                  renderItem={(driver) => (
                    <span>
                      {driver.firstName}-{driver.lastName}
                    </span>
                  )}
                />
                {createPagination()}
              </>
            ) : (
              <p> No Product Found</p>
            )}
          </Row>
        </Container>

        <Col></Col>

        <Link to="/add">
          <Button type="submit">Add Members</Button>
        </Link>
      </Form>
    </>
  );
}

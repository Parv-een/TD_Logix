import { useCallback } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

interface GridProps {
  items: any;
  itemPerRow?: number;
  itemType: "vehicle" | "driver";
  renderItem: (items: any) => JSX.Element;
}

export default function GridList({
  items,
  itemPerRow = 3,
  renderItem,
  itemType,
}: GridProps) {
  const rows = Math.ceil(items.length / (itemPerRow ?? 3));

  const renderFunctions = {
    vehicle: (x) => `Model: ${x.model} , Make:${x.make}`,

    driver: (x) =>
      `Name : ${x.firstName} ${x.lastName},PhoneNumber: ${x.phoneNumber}`,
  };

  const createGrid = useCallback((): JSX.Element[] => {
    const grid: JSX.Element[] = [];
    let rowNumber = 1;
    let sliceIndex = 0;

    while (rowNumber <= rows) {
      const itemsInRow = items.slice(sliceIndex, sliceIndex + itemPerRow);

      grid.push(
        <Row key={rowNumber}>
          {itemsInRow.map((x, i) => (
            <Col key={`${rowNumber}_${i}`}>
              {renderItem(x)}
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={x.image} />
                <Card.Body>
                  <Card.Title>
                    {itemType === "vehicle"
                      ? x.make
                      : itemType === "driver"
                      ? x.name
                      : ""}
                  </Card.Title>
                  <Card.Text>
                    {renderFunctions[itemType]
                      ? renderFunctions[itemType](x)
                      : "No Data Available"}
                  </Card.Text>
                  <Link to={`/items/${x.id}`}>
                    <Button variant="primary">View Info</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      );
      rowNumber++;
      sliceIndex += itemPerRow;
    }
    return grid;
  }, [rows, items, itemPerRow, renderItem, itemType]);

  return rows ? (
    createGrid()
  ) : (
    <Row>
      <p> Not Found</p>
    </Row>
  );
}

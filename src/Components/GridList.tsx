import { Col, Row } from "react-bootstrap";

interface GridProps {
  items: any[];
  itemPerRow?: number;
  renderItem: (items: any) => JSX.Element;
}

export default function GridList({
  items,
  itemPerRow = 3,
  renderItem,
}: GridProps) {
  const rows = Math.ceil(items.length / (itemPerRow ?? 3));

  const createGrid = (): JSX.Element[] => {
    const grid: JSX.Element[] = [];
    let rowNumber = 1;
    let sliceIndex = 0;

    while (rowNumber <= rows) {
      const itemsInRow = items.slice(sliceIndex, sliceIndex + itemPerRow);

      grid.push(
        <Row key={rowNumber}>
          {itemsInRow.map((x, i) => (
            <Col key={`${rowNumber}_${i}`}>{renderItem(x)}</Col>
          ))}
        </Row>
      );
      rowNumber++;
      sliceIndex += itemPerRow;
    }
    return grid;
  };

  return rows ? (
    createGrid()
  ) : (
    <Row>
      <p> Not Found</p>
    </Row>
  );
}

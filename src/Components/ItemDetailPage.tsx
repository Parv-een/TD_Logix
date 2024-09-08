import { useParams } from "react-router-dom";

export default function ItemDetailPage() {
  const { itemId } = useParams();

  //   const item = getItemData(itemId);
  return (
    <>
      <h3> Item Detail Page : {itemId ?? "Not Found"}</h3>
    </>
  );
}

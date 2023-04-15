import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import PropagateLoader from "react-spinners/PropagateLoader";
import { db } from "../../firebase.Config";
import { collection, getDocs, query, where } from "firebase/firestore";

const override = {
  display: "block",
  margin: "auto",
  borderColor: "black",
};

const ItemListContainer = () => {
  const { categoryName } = useParams();

  const [items, setItems] = useState([]);
  useEffect(() => {
    const itemsCollection = collection(db, "products");

    let consulta = undefined;
    if (categoryName) {
      const q = query(itemsCollection, where("category", "==", categoryName));
      consulta = getDocs(q);
    } else {
      consulta = getDocs(itemsCollection);
    }

    consulta.then((res) => {
      let products = res.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id,
        };
      });
      setItems(products);
    });
  }, [categoryName]);

  //tecnica de rendering aplicada con spinner

  return (
    <div>
      {items.length > 0 ? (
        <ItemList items={items} />
      ) : (
        <PropagateLoader
          style={{ display: "flex", justifyContent: "center" }}
          color={"black"}
          //loading={loading}
          cssOverride={override}
          size={20}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
    </div>
  );
};

export default ItemListContainer;

import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { getDoc, collection, doc } from "firebase/firestore";
import { db } from "../../firebase.Config";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const { agregarAlCarrito, getQuantityById } = useContext(CartContext);

  const [productSelected, setProductSelected] = useState([]);
  useEffect(() => {
    const itemsCollection = collection(db, "products");
    const ref = doc(itemsCollection, id);
    getDoc(ref).then((res) =>
      setProductSelected({
        ...res.data(),
        id: res.id,
      })
    );
  }, [id]);

  //const productSelected = products.find((element) => element.id === Number(id));

  const onAdd = (cantidad) => {
    let producto = { ...productSelected, quantity: cantidad };
    agregarAlCarrito(producto);

    //sweeralert2

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto agregado",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  let quantity = getQuantityById(Number(id));
  console.log(quantity);

  return (
    <ItemDetail
      productSelected={productSelected}
      onAdd={onAdd}
      initial={quantity}
    />
  );
};

export default ItemDetailContainer;

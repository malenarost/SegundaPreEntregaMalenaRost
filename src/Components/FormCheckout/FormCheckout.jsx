import { useState } from "react";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase.Config";

const FormCheckout = ({ cart, getTotalPrice, setOrderId, clearCart }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    let total = getTotalPrice();

    let order = {
      buyer: userData,
      items: cart,
      total,
    };

    let orderCollection = collection(db, "orders");
    addDoc(orderCollection, order)
      .then((res) => {
        setOrderId(res.id);
        clearCart();
      })
      .catch((err) => console.log(err));
  };

  //ACTUALIZAR STOCK

  cart.map((product) => {
    let refDoc = doc(db, "products", product.id);
    updateDoc(refDoc, { stock: product.stock - product.quantity });
  });

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          display: "flex",
          margin: "2px",
        }}
      >
        <input
          style={{ display: "flex", margin: "2px" }}
          type="text"
          placeholder="Nombre"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <input
          style={{ display: "flex", margin: "2px" }}
          type="text"
          placeholder="Email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <input
          style={{ display: "flex", margin: "2px" }}
          type="text"
          placeholder="Teléfono"
          value={userData.phone}
          onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
        />
        <button type="submit">comprar</button>
      </form>
    </div>
  );
};

export default FormCheckout;

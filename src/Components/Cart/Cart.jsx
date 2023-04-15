import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import FormCheckout from "../FormCheckout/FormCheckout";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, getTotalPrice, deleteProductById } =
    useContext(CartContext);
  const precioTotal = getTotalPrice();

  const [showForm, setShowForm] = useState(false);

  const [orderId, setOrderId] = useState(null);

  //sweetalert

  const clear = () => {
    Swal.fire({
      title: "¿Seguro que queres vaciar el carrito?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "vaciar",
      denyButtonText: `NO vaciar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("carrito vacio", "", "success");
        clearCart();
      } else if (result.isDenied) {
        Swal.fire("accion no realizada", "", "info");
      }
    });
  };

  if (orderId) {
    return (
      <div>
        <h1>gracias por su compra</h1>
        <h4>orden de compra número: {orderId} </h4>
        <Link to="/">
          <button>seguir comprando</button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      {!showForm ? (
        <div
          style={{
            width: "100%",
            display: "flex",
            margin: "2px",
            justifyContent: "space-evenly",
          }}
        >
          {cart.map((e) => {
            return (
              <div style={{ border: "1px solid black" }} key={e.id}>
                <h1> {e.title} </h1>
                <img
                  src={e.img}
                  alt="imagen del producto"
                  style={{ width: "180px", justifyContent: "center" }}
                />
                <h3> Cantidad: {e.quantity}</h3>
                <h3> $ {e.price} </h3>
                <button onClick={() => deleteProductById(e.id)}>
                  Limpiar del carrito
                </button>
              </div>
            );
          })}
          <h1>TOTAL A PAGAR: $ {precioTotal} </h1>
          <button onClick={() => clear()}>Limpiar carrito</button>
          <button onClick={() => setShowForm(true)}>finalizar la compra</button>
        </div>
      ) : (
        <FormCheckout
          cart={cart}
          getTotalPrice={getTotalPrice}
          setOrderId={setOrderId}
          clearCart={clearCart}
        />
      )}
    </div>
  );
};

export default Cart;

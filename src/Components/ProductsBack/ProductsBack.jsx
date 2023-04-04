import React from "react";
import axios from "axios";

const ProductsBack = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const data = axios.get("http://localhost:5000/products");
    data.then((res) => setProducts(res.data));
  }, []);

  return (
    <div>
      <h1>Procutos desde el backend</h1>
    </div>
  );
};

export default ProductsBack;

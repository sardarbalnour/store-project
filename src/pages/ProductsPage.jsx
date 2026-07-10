import { useState } from "react";
import { ImSearch } from "react-icons/im";

import { useProducts } from "../context/ProductsContext";

import Card from "../components/Card";
import Loader from "../components/Loader";

import styles from "./ProductsPage.module.css";

function ProductsPage() {
  const products = useProducts();

  const [search, setSearch] = useState("");

  const serachHandler = () => {
    console.log(search);
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        />
        <button onClick={serachHandler}>
          <ImSearch />
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.products}>
          {!products.length && <Loader />}
          {products.map((product) => (
            <Card key={product.id} data={product} />
          ))}
        </div>
        <div>Sidebar</div>
      </div>
    </>
  );
}

export default ProductsPage;

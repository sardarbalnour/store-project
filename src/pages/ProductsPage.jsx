import { useEffect, useState } from "react";
import { ImSearch } from "react-icons/im";
import { FaListUl } from "react-icons/fa";

import { useProducts } from "../context/ProductsContext";

import Card from "../components/Card";
import Loader from "../components/Loader";

import styles from "./ProductsPage.module.css";

function ProductsPage() {
  const products = useProducts();

  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});

  useEffect(() => {
    setDisplayed(products);
  }, [products]);

  useEffect(() => {
    console.log(query);
  }, [query]);

  const serachHandler = () => {
    setQuery((query) => ({ ...query, search }));
  };

  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLowerCase();

    if (tagName !== "LI") return;

    setQuery((query) => ({ ...query, category }));
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
          {!displayed.length && <Loader />}
          {displayed.map((product) => (
            <Card key={product.id} data={product} />
          ))}
        </div>
        <div>
          <div>
            <FaListUl />
            <p>Categories</p>
          </div>
          <ul onClick={categoryHandler}>
            <li>All</li>
            <li>Electronics</li>
            <li>Jewelery</li>
            <li>Men's Clothing</li>
            <li>Women's Clothing</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProductsPage;

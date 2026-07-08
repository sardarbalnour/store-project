import { useProducts } from "../context/ProductsContext";

import Card from "../components/Card";

import styles from "./ProductsPage.module.css";

function ProductsPage() {
  const products = useProducts();
  console.log(products);

  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {!products.length && <p>Loading...</p>}
        {products.map((product) => (
          <Card key={product.id} data={product} />
        ))}
      </div>
      <div>Sidebar</div>
    </div>
  );
}

export default ProductsPage;

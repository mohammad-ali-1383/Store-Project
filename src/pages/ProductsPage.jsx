import { ImSearch } from "react-icons/im";
import Card from "../components/Card";
import Loader from "../components/Loader";
import { useProducts } from "../context/ProductContext";
import styles from "./PeoductsPage.module.css";
import { useState } from "react";
import { FaListUl } from "react-icons/fa";
function ProductsPage() {
  const products = useProducts();
  const [search, setSearch] = useState("");

  const searchHandler = () => {
    console.log("first");
  };

  const categorisHandler = (event) => {
    const { tagName } = event.target;
    const categoris = event.target.innerText.toLowerCase();

    if (tagName === !"LI") return;
    console.log(categoris);
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
        <button onClick={searchHandler}>
          <ImSearch />
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.products}>
          {!products.length && <Loader />}
          {products.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>

        <div>
          <div>
            <FaListUl />
            <p>Categories</p>
          </div>
          <ul onClick={categorisHandler}>
            <li>All</li>
            <li>Electronic</li>
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

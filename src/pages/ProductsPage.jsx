import { useEffect, useState } from "react";
import { useProducts } from "../context/ProductContext";
import {
  filterProducts,
  getInitioalQuery,
  searchProducts,
} from "../helper/helper";
import { useSearchParams } from "react-router-dom";

import SearchBox from "../components/SearchBox";
import Card from "../components/Card";
import Loader from "../components/Loader";

import styles from "./PeoductsPage.module.css";
import SideBar from "../components/SideBar";

function ProductsPage() {
  const products = useProducts();

  const [display, setDisplay] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setDisplay(products);

    setQuery(getInitioalQuery(searchParams));
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");

    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.categoris);
    setDisplay(finalProducts);
  }, [query]);

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className={styles.container}>
        <div className={styles.products}>
          {!display.length && <Loader />}
          {display.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>

        <SideBar query={query} setQuery={setQuery} />
      </div>
    </>
  );
}

export default ProductsPage;

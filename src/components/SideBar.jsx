import { createQueryObject } from "../helper/helper";

import { FaListUl } from "react-icons/fa";
import {categoris} from "../constant/list"

import styles from "./SideBar.module.css";


function SideBar({ query, setQuery }) {
  const categorisHandler = (event) => {
    const { tagName } = event.target;
    const categoris = event.target.innerText.toLowerCase();

    if (tagName === !"LI") return;
    setQuery((query) => createQueryObject(query, { categoris: categoris }));
  };

  return (
    <div className={styles.sidebar}>
      <div>
        <FaListUl />
        <p>Categories</p>
      </div>
      <ul onClick={categorisHandler}>
        {categoris.map((item) => (
          <li
            key={item.id}
            className={
              item.type.toLowerCase() == query.categoris
                ? styles.selected
                : null
            }>
            {item.type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;

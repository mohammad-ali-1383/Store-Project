import { createQueryObject } from "../helper/helper";

import { FaListUl } from "react-icons/fa";

function SideBar({ setQuery }) {
  const categorisHandler = (event) => {
    const { tagName } = event.target;
    const categoris = event.target.innerText.toLowerCase();

    if (tagName === !"LI") return;
    setQuery((query) => createQueryObject(query, { categoris: categoris }));
  };

  return (
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
  );
}

export default SideBar;

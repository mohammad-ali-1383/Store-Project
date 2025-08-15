import { BsPatchCheck } from "react-icons/bs";
import { FaHashtag } from "react-icons/fa";
import { TbChecklist } from "react-icons/tb";

import styles from "./BasketSideBar.module.css";

function BasketSideBar({ state, clickHandler }) {
  return (
    <div className={styles.sidebar}>
      <div>
        <TbChecklist />
        <p>Totla:</p>
        <span>{state.total} $</span>
      </div>
      <div>
        <FaHashtag />
        <p>Quantity:</p>
        <span>{state.itemsCounter}</span>
      </div>
      <div>
        <BsPatchCheck />
        <p>Statuse:</p>
        <span>{!state.checkout && "Pending ..."}</span>
      </div>
      <button onClick={() => clickHandler("CHECKOUT")}>CHECKOUT</button>
    </div>
  );
}

export default BasketSideBar;

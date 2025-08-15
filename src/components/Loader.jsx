//or react19
import { ClipLoader } from "react-spinners";
import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles.loader}>
      <ClipLoader size={100} color="#fe5d42" />
    </div>
  );
}

export default Loader;

//fo react18
// import { RotatingLines } from "react-loader-spinner";

// import styles from "./Loader.module.css";
// function Loader() {
//   return (
//     <div className={styles.loader}>
//       <RotatingLines
//         width="100px"
//         height="100px"
//         strokeColor="#fe5d42"
//         strokeWidth="3"
//       />
//     </div>
//   );
// }

// export default Loader;

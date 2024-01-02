import styles from "./styles.module.scss"
import HashLoader  from "react-spinners/HashLoader"
export default function MainLoader({loading}) {
  return (
    <div className={styles.loader}>

        <HashLoader color="#351cd0" loading={loading}/>
    </div>
  )
}

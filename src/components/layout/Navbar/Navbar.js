import { Link } from "react-router-dom"
import styles from './Navbar.module.css'

function Navbar (){
    return (
        <nav className={styles.navbar}>
        <span className={styles.example}>Exemplo</span>
        <ul className={styles.list}>
        <li className={styles.item}><Link to="/">Home</Link></li>
        <li className={styles.item}> <Link to ="/destinos">Destinos</Link></li>
        <li className={styles.item}> <Link to ="/sobre">Sobre</Link></li>
        <li className={styles.item}> <Link to = "/contato">Contato</Link></li>
        </ul>
        </nav>
    )
}

export default Navbar;
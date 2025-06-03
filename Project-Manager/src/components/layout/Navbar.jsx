import {Link} from 'react-router-dom'

import Container from './Container'

import styles from './Navbar.module.css'

import logo from '../../img/Logo.png'

function Navbar(){
    return (
        <nav className={styles.navbar}>
        <Container>
        <Link to="/"><img src={logo} alt="TaskFlow" srcSet="" /></Link>

    <ul className={styles.list}>
        <li>
        <Link to="/" className={styles.item}>Home</Link>
        </li>

         <li>
        <Link to="/projects" className={styles.item}>Projects</Link>
        </li>

        <li>
        <Link to="/contact" className={styles.item}>Contato</Link>
        </li>

        <li><Link to="/company" className={styles.item}>Empresa</Link>
        </li>

        </ul>
        </Container>
        </nav>
    )
}

export default Navbar
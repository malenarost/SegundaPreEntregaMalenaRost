import CartWidget from "./CartWidget/CartWidget";
import Logo from "./Logo";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <Logo />
      <h5>Di paola Propiedades</h5>
      <ul className={styles.containerList}>
        <a href="">
          <li>contacto</li>
        </a>
        <a href="">
          <li>¿Quienes somos?</li>
        </a>
        <a href="">
          <li>¿Ayuda?</li>
        </a>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;

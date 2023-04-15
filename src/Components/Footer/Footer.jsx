import styles from "./Footer.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = ({ children }) => {
  return (
    <div>
      <div className={styles.containerFooter}>
        <a href="https://www.instagram.com/nike/">
          <InstagramIcon
            style={{
              fontSize: "3rem",
              color: "white",
            }}
          />
        </a>

        <a href="https://www.facebook.com/nike/">
          <FacebookIcon
            style={{
              fontSize: "3rem",
              color: "white",
            }}
          />
        </a>

        <a href="https://twitter.com/nike">
          <TwitterIcon
            style={{
              fontSize: "3rem",
              color: "white",
            }}
          />
        </a>
      </div>
      <p>
        © Copyright - 2017 - 2023 www.nike.com.ar, TODOS LOS DERECHOS RESERVADOS
      </p>
    </div>
  );
};

export default Footer;

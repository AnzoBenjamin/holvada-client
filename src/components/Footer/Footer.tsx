import classes from "./Footer.module.scss";
const Footer = () => {
  return (
    <footer className={classes.footer} id="footer">
      <h1 className={classes["footer-header"]}>2023</h1>
      <div className={classes["footer-bottom"]}>
        <p>Copyright &copy; All rights reserved</p>
        <div className={classes["footer--icon-area"]}>
          <a target="blank" href="mailto:info@holvada.com">
            <img src="/gmail.webp" alt="" className={classes.icon} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/holvada"
          >
            <img src="/twitter.webp" alt="Twitter" className={classes.icon} />
          </a>

          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=+256780827089&text=Hello%20from%20your%20website"
          >
            <img src="/whatsapp.webp" alt="Whatsapp" className={classes.icon} />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://facebook.com/profile.php?id=1000952211991679"
          >
            {" "}
            <img src="/facebook.webp" alt="Facebook" className={classes.icon} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://instagram.com/holvada"
          >
            {" "}
            <img
              src="/instagram.webp"
              alt="Instagram"
              className={classes.icon}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

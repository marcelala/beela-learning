import element from "../assets/images/element-bottom.svg";
import github from "../assets/icons/github.svg";
import linkedin from "../assets/icons/linkedin.svg";
import home from "../assets/icons/home.svg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-container">
      <img
        src={element}
        alt="colorfull circles decoration"
        className="element"
      />
      <footer>
        <div className="icons">
          <a href="https://github.com/marcelala/">
            <img src={github} alt="github icon" />
          </a>
          <a href="https://www.linkedin.com/in/marcela-fortis/">
            <img src={linkedin} alt="linkedin icon" />
          </a>
          <a href="https://marcelaf-portfolio.web.app/">
            <img src={home} alt="home icon" />
          </a>
        </div>
        <a href="mailto:contact@beela.se" target="_blank" rel="noreferrer">
          <p>Email: contact@beela.se</p>
        </a>
        <p>©{currentYear} Beela & Marcela Fortis</p>
      </footer>
    </div>
  );
}

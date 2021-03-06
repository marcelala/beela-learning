import element from "../assets/images/element-bottom.svg";
import github from "../assets/icons/github.svg";
import linkedin from "../assets/icons/linkedin.svg";
import Icon from "./Icon";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-container">
      <img
        src={element}
        alt="colorful circles decoration"
        className="element"
      />
      <footer>
        <div className="icons">
          <a href="https://github.com/marcelala/">
            <Icon fileName={"github"} />
          </a>
          <a href="https://www.linkedin.com/in/marcela-fortis/">
            <Icon fileName={"linkedin"} />
          </a>
          <a href="https://marcelaf-portfolio.web.app/">
            <Icon fileName={"Star-1"} />
          </a>
        </div>
        <a
          href="mailto:contact@beela.se"
          target="_blank"
          rel="noreferrer"
          className={"at"}
        >
          <p> contact@beela.se</p>
        </a>
        <p>
          ©{currentYear} <a href="https://beela.se/">Beela</a> &{" "}
          <a href="https://marcelaf-portfolio.web.app/">Marcela Felix Fortis</a>
        </p>
      </footer>
    </div>
  );
}

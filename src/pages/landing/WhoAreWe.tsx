import juliana from "assets/images/avatar/avatar-juliana.png";
import denise from "assets/images/avatar/avatar-denise.png";
import maryam from "assets/images/avatar/avatar-maryam.png";
import Icon from "../../components/Icon";

export default function WhoAreWe() {
  return (
    <section id={"who"}>
      <h1>Who are we?</h1>
      <ul>
        <li>
          <img src={juliana} alt="Latina" />
          <div className="text-box">
            <h3>Juliana Araujo</h3>
            <h4>Co-Founder &amp; CEO</h4>
            <p>
              Latina immigrant with 8+ years of experience working in tech,
              leading product teams to develop data-driven products. She has a
              Bachelor's in Information Systems and is currently writing her
              master thesis in IT Project Management from Stockholm University.
            </p>
          </div>
          <div className="button-box">
            <a
              href="https://www.linkedin.com/in/jularase/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon fileName={"linkedin"} />
            </a>
            <a href="mailto: juliana.araujo@beela.se">
              <Icon fileName={"letter"} />
            </a>
          </div>
        </li>
        <li>
          <img src={denise} alt="Latina" />
          <div className="text-box">
            <h3>Denise Muniz</h3>
            <h4>Co-Founder &amp; COO</h4>
            <p>
              Latina immigrant and fullstack developer. Denise has over 10 years
              of experience working as a business analyst but decided to change
              her career path to software development after she moved to Sweden.
              She has a Bachelor's in Information Systems and a Master's in
              Business &amp; Project Management.
            </p>
          </div>
          <div className="button-box">
            <a
              href="https://www.linkedin.com/in/deniseamuniz/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon fileName={"linkedin"} />
            </a>
            <a href="mailto: denise.muniz@beela.se">
              <Icon fileName={"letter"} />
            </a>
          </div>
        </li>
        <li>
          <img src={maryam} alt="entrepreneur" />
          <div className="text-box">
            <h3>Maryam Arai</h3>
            <h4>Senior Organizational Developer</h4>
            <p>
              Social entrepreneur with a passion for diversity, inclusion, and
              belonging. She has 8 years of experience in HR-related
              professions,including work with Arbetsförmedlingen with a focus on
              education, recruitment, and innovation.{" "}
            </p>
          </div>
          <div className="button-box">
            <a
              href="https://www.linkedin.com/in/maryam-arai-299a69a1/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon fileName={"linkedin"} />
            </a>
            <a href="mailto: maryan.arai@gmail.com">
              <Icon fileName={"letter"} />
            </a>
          </div>
        </li>
      </ul>
    </section>
  );
}

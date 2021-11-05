import logo from "../../assets/images/logo/logoNoText.png";
import Icon from "../../components/Icon";

export default function AuthorCard(props: {
  owner: string;
  ownerEmail: string;
}) {
  return (
    <section id={"author-card"}>
      <h3>Author</h3>
      <img src={logo} alt={"bee"} />
      <h4>{props.owner}</h4>
      <a
        href={`mailto:${props.ownerEmail}`}
        target="_blank"
        rel="noreferrer"
        className={"at"}
      >
        <Icon fileName={"letter"} />
      </a>
    </section>
  );
}

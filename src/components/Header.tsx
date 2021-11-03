import logo from "assets/images/logo/beelaLogo.png";
import element from "assets/images/element-corner.svg";

export default function Header() {
  return (
    <div className={"header"}>
      <img src={element} alt="bee in a hive" className={"element-header"} />
      <img src={logo} alt="bee in a hive" className={"logo-header"} />
    </div>
  );
}

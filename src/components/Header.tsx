import logo from "assets/images/logo/beelaLogo.png";
import element from "assets/images/element-corner.svg";
type iProps = {
  id: string;
};
export default function Header({ id }: iProps) {
  return (
    <div className="header" id={id}>
      <img src={element} alt="bee in a hive" className={"element-header"} />
      <img src={logo} alt="bee in a hive" className={"logo-header"} />
    </div>
  );
}

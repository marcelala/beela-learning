interface iProps {
  fileName: string;
  title?: string;
}

export default function Icon({ fileName, title }: iProps) {
  const iconObject = require(`assets/icons/${fileName}.svg`);
  const iconURL = iconObject.default;
  return (
    <label htmlFor="icon-name">
      <span> {title}</span>
      <img src={iconURL} alt={"icon of" + fileName} />
    </label>
  );
}

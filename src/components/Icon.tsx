interface iProps {
  fileName: string;
}

export default function Icon({ fileName }: iProps) {
  const iconObject = require(`assets/icons/${fileName}.svg`);
  const iconURL = iconObject.default;
  return (
    <label htmlFor="icon-name">
      <img src={iconURL} alt={"icon of" + fileName} />
    </label>
  );
}

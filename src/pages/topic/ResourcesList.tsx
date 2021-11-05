import iResource from "../../interfaces/iResource";
import Video from "./Video";
import ResourceCard from "./ResourceCard";

type iProps = {
  resources: any;
  toShow: string;
};

export function ResourcesList({ resources, toShow }: iProps) {
  if (resources === undefined)
    return <span> No items have been to this topic</span>;
  if (resources === null) return <span> No items have been to this topic</span>;
  if (resources.length < 0)
    return <span>No items have been to this topic</span>;

  const Videos = resources.map((item: iResource, index: any) => (
    <li key={index} id={"resource resource-video"}>
      <Video resource={item} />
    </li>
  ));

  const Links = resources.map((item: iResource, index: any) => (
    <li key={index} id={"resource"}>
      <a href={item.url} target="_blank" rel="noreferrer">
        <ResourceCard resource={item} />
      </a>
    </li>
  ));

  const Files = resources.map((item: iResource, index: any) => (
    <li key={index} id={"resource"}>
      <a href={item.url} target="_blank" rel="noreferrer" download>
        <ResourceCard resource={item} />
      </a>
    </li>
  ));

  if (toShow === "video") {
    return Videos;
  }
  if (toShow === "link") {
    return Links;
  }
  if (toShow === "file") {
    return Files;
  } else return <span> No items available </span>;
}

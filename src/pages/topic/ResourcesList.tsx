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
    <Video resource={item} />
  ));

  const Links = resources.map((item: iResource, index: any) => (
    <a href={item.url} target="_blank" rel="noreferrer" key={index}>
      <ResourceCard resource={item} />
    </a>
  ));

  const Files = resources.map((item: iResource, index: any) => (
    <a href={item.url} target="_blank" rel="noreferrer" download key={index}>
      <ResourceCard resource={item} />
    </a>
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

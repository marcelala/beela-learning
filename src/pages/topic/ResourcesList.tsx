import iResource from "../../interfaces/iResource";
import Video from "./Video";
import ResourceCard from "./ResourceCard";

type iProps = {
  resources: any;
  toShow: string;
};

export function ResourcesList({ resources, toShow }: iProps) {
  if (resources === undefined || null) {
    return <span>No resources of have been added to this topic</span>;
  }
  if (resources.type === undefined && toShow) {
    return <span>No resources of this type are available</span>;
  }
  if (toShow === "video") {
    return resources.map((item: iResource, index: any) => (
      <li key={index}>
        <Video resource={item} />
      </li>
    ));
  }
  if (toShow === "link") {
    return resources.map((item: iResource, index: any) => (
      <li key={index}>
        <a href={item.url} target="_blank" rel="noreferrer">
          <ResourceCard resource={item} />
        </a>
      </li>
    ));
  }
  if (toShow === "file") {
    return resources.map((item: iResource, index: any) => (
      <li key={index}>
        <a href={item.url} target="_blank" rel="noreferrer" download>
          <ResourceCard resource={item} />
        </a>
      </li>
    ));
  } else return <span>No items available</span>;
}

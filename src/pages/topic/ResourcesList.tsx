import iResource from "../../interfaces/iResource";
import Video from "./Video";
import { useState } from "react";
import ResourceCard from "./ResourceCard";

type iProps = {
  resources: iResource[];
  toShow: string;
};

export const ResourcesList = ({ resources, toShow }: iProps) => {
  const selected = getResources(resources);
  const [selectedList, setSelected] = useState(selected);

  function getResources(array: iResource[]) {
    return array.filter((item: iResource) => item.type === toShow);
  }

  function displayResources(array: iResource[], toShow: string) {
    if (toShow === "video") {
      return selectedList.map((item: iResource, index) => (
        <li key={index}>
          <Video resource={item} />
        </li>
      ));
    }
    if (toShow === "link") {
      return selectedList.map((item: iResource, index) => (
        <li key={index}>
          <a href={item.url} rel="noreferrer">
            <ResourceCard resource={item} />
          </a>
        </li>
      ));
    } else if (toShow === "file") {
      return selectedList.map((item: iResource, index) => (
        <li key={index}>
          <a href={item.url} target="_blank" rel="noreferrer" download>
            <ResourceCard resource={item} />
          </a>
        </li>
      ));
    }
  }

  if (selectedList === undefined) return <span>No items available</span>;
  if (selectedList === null) return <span>No items available</span>;

  return <ul>{displayResources(selectedList, toShow)}</ul>;
};

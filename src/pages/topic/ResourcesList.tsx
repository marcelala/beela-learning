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

  const LinkCardList = selectedList.map((item: iResource, index) => (
    <li key={index}>
      <ResourceCard resource={item} />
    </li>
  ));

  const VideoCardList = selectedList.map((item: iResource, index) => (
    <li key={index}>
      <Video resource={item} />
    </li>
  ));

  const ResourceCardList = selectedList.map((item: iResource, index) => (
    <li key={index}>
      <ResourceCard resource={item} />
    </li>
  ));
  console.log(selected, "list");
  if (selectedList === undefined) return <span>No items available</span>;
  if (selectedList === null) return <span>No items available</span>;

  return <ul>{VideoCardList}</ul>;
};

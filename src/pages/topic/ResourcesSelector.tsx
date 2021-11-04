import { useRef, useState } from "react";
import Icon from "../../components/Icon";

type iProps = {
  handleClick: (e: any) => void;
  onClickVideo: (e: any) => void;
};

export default function ResourcesSelector({
  handleClick,
  onClickVideo,
}: iProps) {
  return (
    <>
      <ul className="resources-menu">
        <li>
          <button
            value="link"
            onClick={handleClick}
            className={"btn-secondary"}
          >
            Links
          </button>
        </li>
        <li>
          <button
            value="file"
            onClick={handleClick}
            className={"btn-secondary"}
          >
            Files
          </button>
        </li>
        <li>
          <button
            value="video"
            onClick={onClickVideo}
            className={"btn-secondary"}
          >
            Videos
          </button>
        </li>
      </ul>
      <hr />
    </>
  );
}

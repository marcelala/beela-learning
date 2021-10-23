import iLink from "./iLink";
import iFile from "./iFile";
import iVideo from "./iVideo";

export default interface iTopic {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  owner: string;
  thumbnailURL: string;
  topicImageURL: string;
  links: Array<iLink>;
  files: Array<iFile>;
  video: Array<iVideo>;
}

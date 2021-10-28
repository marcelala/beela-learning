export default interface iTopic {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  owner: string;
  thumbnailURL: string;
  topicImageURL: string;
  links: Object;
  files: Object;
  videos: Object;
}

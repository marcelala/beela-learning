export default interface iTopic {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  owner: string;
  ownerEmail: string;
  thumbnailURL: string;
  topicImageURL: string;
  resources?: any;
}

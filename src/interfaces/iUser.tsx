export default interface iUser {
  id: string;
  fullName: string;
  email: string;
  city: string;
  password: string;
  imageURL: string;
  userRole: string;
  phone: string;
  links: Array<any>;
  topics: Array<any>;
  favorites: Array<any>;
}

export default interface iUser {
  uid?: string;
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

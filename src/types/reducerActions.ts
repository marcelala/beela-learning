// Project files
import iTopic from "../interfaces/iTopic";
import Type from "./reducerTypes";

type Action =
  | { type: Type.CREATE_TOPIC; payload: iTopic }
  | { type: Type.UPDATE_TOPIC; payload: iTopic }
  | { type: Type.DELETE_TOPIC; payload: string }
  | { type: Type.SET_TOPICS; payload: iTopic[] };

export default Action;

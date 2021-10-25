// project files
import Action from "../types/reducerActions";
import Type from "../types/reducerTypes";
import iTopic from "../interfaces/iTopic";

function TopicsReducer(state: iTopic[], action: Action): iTopic[] {
  switch (action.type) {
    case Type.CREATE_TOPIC:
      // @ts-ignore
      return createTopic(state, action);
    case Type.UPDATE_TOPIC:
      return updateTopic(state, action);
    case Type.SET_TOPICS:
      return setTopics(state, action);
    default:
      throw new Error("No action type found");
  }
}

function createTopic(state: iTopic[], action: Action) {
  const { payload } = action;
  //@ts-ignore
  const topic = payload;
  return [...state, topic];
}

function updateTopic(state: iTopic[], action: Action) {
  const { payload } = action;
  //@ts-ignore
  const topic = payload;
  const newState = [...state];
  // @ts-ignore
  const index = newState.findIndex((item) => item.id === topic.id);

  // @ts-ignore
  newState[index] = { ...topic };
  return newState;
}

function setTopics(state: iTopic[], action: Action) {
  const { payload } = action;
  //@ts-ignore
  const newTopics: iTopic[] = payload;

  if (payload !== null) return newTopics;
  return state;
}

export default TopicsReducer;

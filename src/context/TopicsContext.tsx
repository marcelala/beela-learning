// dependencies
import { createContext, ReactNode, useContext, useReducer } from "react";
import iTopic from "../interfaces/iTopic";
import TopicsReducer from "./TopicsReducer";
//interface
interface iProps {
  children: ReactNode;
}
interface iContext {
  dispatch: Function;
  topicsData: iTopic[];
}
// properties
const initialState: iTopic[] = [];
const TopicsDataContext = createContext<iContext>({
  dispatch: () => console.warn("context used outside the provider"),
  topicsData: initialState,
});

export function TopicsDataProvider({ children }: iProps) {
  // Local state
  const [topicsData, dispatch] = useReducer(TopicsReducer, initialState);

  return (
    <TopicsDataContext.Provider value={{ dispatch, topicsData }}>
      {children}
    </TopicsDataContext.Provider>
  );
}

export function useTopicsData() {
  return useContext(TopicsDataContext);
}

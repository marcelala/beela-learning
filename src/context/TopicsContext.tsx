// dependencies
import { createContext, useContext, useState } from "react";
import iTopic from "../interfaces/iTopic";
//interface
interface iContext {
  topicsData: iTopic[];
  setTopicsData: any;
}
// properties
const initialState: iTopic[] = [];
const TopicsDataContext = createContext<iContext>({
  topicsData: initialState,
  setTopicsData: null,
});

export function TopicsDataProvider({ children }: any) {
  // Local state
  const [topicsData, setTopicsData] = useState(initialState);

  return (
    <TopicsDataContext.Provider value={{ topicsData, setTopicsData }}>
      {children}
    </TopicsDataContext.Provider>
  );
}

export function useTopicsData() {
  return useContext(TopicsDataContext);
}

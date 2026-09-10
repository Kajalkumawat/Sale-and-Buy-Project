import { createContext, useContext, useState } from "react";
import { shortlistDefault } from "../data/mockData";

const AppStateContext = createContext(null);

export function AppStateProvider({ children }) {
  const [shortlist, setShortlist] = useState(shortlistDefault);
  const [compareList, setCompareList] = useState([]);

  const toggleShortlist = (id) => {
    setShortlist((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  const toggleCompare = (id) => {
    setCompareList((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      if (prev.length >= 3) return prev;
      return [...prev, id];
    });
  };

  const value = { shortlist, toggleShortlist, compareList, toggleCompare, setCompareList };

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components -- hook lives with its provider by design
export function useAppState() {
  const ctx = useContext(AppStateContext);
  if (!ctx) throw new Error("useAppState must be used within AppStateProvider");
  return ctx;
}

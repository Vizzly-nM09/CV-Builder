import { createContext, useContext } from "react";

export const CVContext = createContext();

export function useCVContext() {
  const context = useContext(CVContext);
  if (!context) {
    throw new Error("useCVContext must be used within a CVProvider");
  }

  return context;
}

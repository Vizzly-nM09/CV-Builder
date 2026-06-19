import { CVContext } from "../context/CVContext";
import { useCVData } from "../hooks/useCVData";

function CVProvider({ children }) {
  const cvDataValues = useCVData();

  return (
    <CVContext.Provider value={cvDataValues}>{children}</CVContext.Provider>
  );
}

export default CVProvider;

import { createContext, useState } from "react";

const ViewContext = createContext(null);

export default function ViewProvider({ children }) {
  const [view, setView] = useState(null);

  return (
    <ViewContext.Provider value={{ view, setView }}>
      {children}
    </ViewContext.Provider>
  );
}

export { ViewContext };

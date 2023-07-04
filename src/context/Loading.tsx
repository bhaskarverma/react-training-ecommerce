import React, { ReactNode, createContext, useState } from "react";

interface LoadingProps {
  children: ReactNode;
}

interface LoadingContextType {
  setLoading: (loading: boolean) => void;
}

const defaultContext: LoadingContextType = {
  setLoading: () => {},
};

const LoadingContext = createContext<LoadingContextType>(defaultContext);

function Loading({ children }: LoadingProps) {
  const [loading, setLoading] = useState(true);

  return loading ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span
        style={{
          fontSize: 30,
          fontWeight: "bold",
        }}
      >
        {" "}
        Loading{" "}
      </span>
    </div>
  ) : (
    <LoadingContext.Provider
      value={{
        setLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
}

export default Loading;
export { LoadingContext };

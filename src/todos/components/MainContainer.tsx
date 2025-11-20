import type React from "react";

export const MainContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-7xl w-full">{children}</div>;
};

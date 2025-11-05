import { HelmetProvider } from "react-helmet-async";
import { ReactNode } from "react";

interface AppWrapperProps {
  children: ReactNode;
}

export const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
  return <HelmetProvider>{children}</HelmetProvider>;
};


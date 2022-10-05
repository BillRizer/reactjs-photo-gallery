import React from "react";
import { LoadingProvider } from "./loading";

interface Props {
  children: any;
}
const AppProvider = ({ children }: Props) => (
  <LoadingProvider>{children}</LoadingProvider>
);

export default AppProvider;

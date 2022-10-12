import React from "react";
import { LoadingProvider } from "./loading";
import {  ModalProvider } from "./modal";

interface Props {
  children: any;
}
const AppProvider = ({ children }: Props) => (
  <LoadingProvider>
    <ModalProvider>{children}</ModalProvider>
  </LoadingProvider>
);

export default AppProvider;

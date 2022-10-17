import React, { useState, useCallback, useContext, createContext } from "react";
import ModalComponent from "../components/Modal";
import { IPayloadProps } from "../types/modal-payload";

interface ModalContextData {
  showModal(payload: IPayloadProps): void;
  hideModal(): void;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);
interface Props {
  children: any;
}
export const ModalProvider = ({ children }: Props) => {
  const [modal, setModal] = useState<Boolean>();
  const [payload, setPayload] = useState<IPayloadProps>();

  const showModal = useCallback((payload: IPayloadProps) => {
    setPayload(payload);
    setModal(true);
  }, []);

  const hideModal = useCallback(() => {
    setModal(false);
  }, []);

  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      {children}
      <ModalComponent isActive={modal} payload={payload} />
    </ModalContext.Provider>
  );
};

export function useModal(): ModalContextData {
  const context = useContext(ModalContext);

  if (!context)
    throw new Error("useModal must be used within an Modal Provider");

  return context;
}

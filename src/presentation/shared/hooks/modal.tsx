import React, { useState, useCallback, useContext, createContext } from 'react';
import ModalComponent from '../components/Modal';

interface ModalContextData {
  showModal(): void;
  hideModal(): void;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);
interface Props {
  children: any;
}
export const ModalProvider = ({ children }:Props) => {
  const [modal, setModal] = useState<Boolean>();

  const showModal = useCallback(() => {
      setModal(true);
    },
    [],
  );

  const hideModal = useCallback(() => {
    setModal(false);
  }, []);

  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
     
      {children}
      <ModalComponent isActive={modal} />
    </ModalContext.Provider>
  );
};

export function useModal(): ModalContextData {
  const context = useContext(ModalContext);

  if (!context)
    throw new Error('useModal must be used within an Modal Provider');

  return context;
}

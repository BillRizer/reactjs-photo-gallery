import React, { useState, useCallback, useContext, createContext } from 'react';
import LoadingComponent from '../../presentation/shared/components/Loading';

interface LoadinContextData {
  showLoading(): void;
  hideLoading(): void;
}

const LoadingContext = createContext<LoadinContextData>({} as LoadinContextData);
interface Props {
  children: any;
}
export const LoadingProvider = ({ children }:Props) => {
  const [loading, setLoading] = useState<Boolean>();

  const showLoading = useCallback(() => {
      setLoading(true);
    },
    [],
  );

  const hideLoading = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <LoadingContext.Provider value={{ showLoading, hideLoading }}>
      {children}
      <LoadingComponent isActive={loading} />
    </LoadingContext.Provider>
  );
};

export function useLoading(): LoadinContextData {
  const context = useContext(LoadingContext);

  if (!context)
    throw new Error('useLoading must be used within an LoadingProvider');

  return context;
}

import { createContext, useContext } from 'react';

export const PortfolioContext = createContext(undefined);
export const usePortfolioData = () => {
  return useContext(PortfolioContext);
};

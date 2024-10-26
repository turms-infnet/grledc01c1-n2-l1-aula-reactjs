import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface AppProviderProps {
    children: ReactNode;
}
interface AppContextInterface {
    changeLanguage: void,
}

const AppContext = createContext<AppContextInterface | null>(null);

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const changeLanguage = () => {
        console.log('oi');
    }

    const sharedState = {
        changeLanguage,
    };

    return  <AppContext.Provider value={sharedState}>
                {children}
            </AppContext.Provider>
}

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === null) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export default AppProvider;
import React, { createContext, useContext, ReactNode } from 'react';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import Routes from "./routes";
import { useTranslation } from 'react-i18next';

interface AppContextInterface {
  supabase: SupabaseClient;
  changeLanguage: (lng: string) => void,
  t: (key: string) => string
}

const AppContext = createContext<AppContextInterface | null>(null);

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL!, import.meta.env.VITE_API_KEY!);

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const sharedState: AppContextInterface = {
    supabase,
    changeLanguage,
    t
  };

  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === null) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

const App: React.FC = () => {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
};

export default App;
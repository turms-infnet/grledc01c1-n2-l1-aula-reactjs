// Libraries
import React, { createContext, useContext, ReactNode, useEffect, useState, useCallback } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useTranslation } from 'react-i18next';

// Internal
import { lightTheme, darkTheme } from './themes';
import { ThemeProvider, useMediaQuery } from '@mui/material';
import { AppContextInterface, SnackbarContextInterface } from "./interfaces";
import './assets/scss/App.scss';
import { Snackbar } from './components';

const AppContext = createContext<AppContextInterface | null>(null);
const SnackbarContext = createContext<SnackbarContextInterface | undefined>(undefined);

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL!, import.meta.env.VITE_API_KEY!);

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const { t, i18n } = useTranslation();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const showMessage = useCallback((message: string) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  }, []);

  const handleClose = () => {
    setSnackbarOpen(false);
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [i18n]);

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
      <SnackbarContext.Provider value={{ showMessage }}>
        <ThemeProvider theme={prefersDarkMode ? darkTheme : lightTheme}>
          {children}
          <Snackbar
            open={snackbarOpen}
            message={snackbarMessage}
            autoHideDuration={6000}
            onClose={handleClose}
          />
        </ThemeProvider>
      </SnackbarContext.Provider>
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

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  return context;
};

export default AppProvider;
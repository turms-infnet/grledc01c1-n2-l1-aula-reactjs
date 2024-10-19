// Libraries
import React, { createContext, useContext, ReactNode, useEffect, useState, useCallback } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useTranslation } from 'react-i18next';

// Internal
import { lightTheme, darkTheme } from './themes';
import { ThemeProvider, useMediaQuery } from '@mui/material';
import { AppContextInterface, SnackbarContextInterface } from "./interfaces";
import './assets/scss/App.scss';
import { Alert, Grid, Snackbar } from './components';
import { logout } from './services/authentication';
import AlertContextInterface from './interfaces/AlertContextInterface';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

const AppContext = createContext<AppContextInterface | null>(null);
const SnackbarContext = createContext<SnackbarContextInterface | undefined>(undefined);
const AlertContext = createContext<AlertContextInterface | undefined>(undefined);

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL!, import.meta.env.VITE_API_KEY!);

interface AppProviderProps {
  children: ReactNode;
}



const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const { t, i18n } = useTranslation();
  let storedLanguage = localStorage.getItem('language');
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const showMessage = useCallback((message: string) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  }, []);

  const showAlert = useCallback((message: string, severity: string) => {
    setAlertSeverity(severity);
    setAlertMessage(message);
    setTimeout(() => {
      setAlertSeverity('');
      setAlertMessage('');
    }, 4000);
  }, []);

  const handleClose = () => {
    setSnackbarOpen(false);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  const getUser = () => {
    const userStr = localStorage.getItem("user");
    if (!userStr) {
      logout(null, supabase);
      return null;
    }
    return JSON.parse(userStr);
  }

  let user = getUser();

  useEffect(() => {
    storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      changeLanguage(storedLanguage);
    } else {
      const navLang = navigator.language.split("-")[0];
      changeLanguage(navLang);
    }
  }, [i18n]);

  const sharedState: AppContextInterface = {
    supabase,
    changeLanguage,
    t,
    storedLanguage,
    user
  };

  return (
    <AppContext.Provider value={sharedState}>
      <AlertContext.Provider value={{ showAlert }}>
        <SnackbarContext.Provider value={{ showMessage }}>
          <ThemeProvider theme={prefersDarkMode ? darkTheme : lightTheme}>
            {children}
            <Snackbar
              open={snackbarOpen}
              message={snackbarMessage}
              autoHideDuration={6000}
              onClose={handleClose}
            />
            { alertMessage && alertMessage !== "" ? 
            <Grid container={true} spacing={2}>
              <Grid item={true} size={{ xs: 12 }} 
                sx={{
                  position: 'absolute',
                  bottom: '0', 
                  left: '0', 
                  padding: '1em'
                }}>
                <Alert severity={alertSeverity}><span dangerouslySetInnerHTML={{ __html: alertMessage }} /></Alert>
              </Grid>
            </Grid>
            : null }
          </ThemeProvider>
        </SnackbarContext.Provider>
      </AlertContext.Provider>
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

export const useAlert = () =>{
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlert must be used within a AlertProvider");
  }
  return context;
}

export default AppProvider;
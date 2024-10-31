import { createContext, useContext, useState } from 'react';
import { Alert, Grid, Snackbar } from './components';

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
    const timeoutDuration = 6000;
    
    const [snackOpen, setSnackOpen] = useState(false);
    const [snackMessage, setSnackMessage] = useState("");

    const [alertMessage, setAlertMessage] = useState("");
    const [alertSeverity, setAlertSeverity] = useState("");
    const [alertVariant, setAlertVariant] = useState(null);


    const changeLanguage = () => {
        console.log('oi');
    }

    const showSnackMessage = (message) => {
        setSnackMessage(message);
        setSnackOpen(true);
    }

    const showAlertMessage = (message, severity, variant) => {
        setAlertMessage(message);
        setAlertSeverity(severity);
        setAlertVariant(variant);

        setTimeout(() => {
            setAlertMessage("");
        }, timeoutDuration);
    }

    const handleClose = () => {
        setSnackMessage("");
        setSnackOpen(false);
    }

    const sharedState = {
        changeLanguage,
        showSnackMessage,
        showAlertMessage
    };

    return (
        <AppContext.Provider value={sharedState}>
        {children}
        <Snackbar
            autoHideDuration={timeoutDuration}
            onClose={handleClose}
            open={snackOpen}
            message={snackMessage}
        />
        { alertMessage 
        ?   <Grid container={true}
                sx={{
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    width: '100%',
                    padding: 2
                }}
            >
                <Grid item={true} size={{ xs: 12 }}>
                    <Alert variant={alertVariant} severity={alertSeverity}>{alertMessage}</Alert>
                </Grid>
            </Grid>
        : null}
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

export default AppProvider;
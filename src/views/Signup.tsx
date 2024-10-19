import { Container, Box, Button, Typography, TextField, Avatar } from "../components";
import logo from '../assets/images/logo.png';
import { Link, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { validateChange, validateEmail, validatePasswords } from "../services/validators";
import { handleInputValue } from "../services/actions";
import { signUp } from "../services/authentication";
import { useAppContext, useSnackbar } from "../Context";

const SignUp: React.FC = () => {
    const { t, supabase } = useAppContext();
    const { showMessage } = useSnackbar();

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        email: {
            value: "",
            error: null,
            helperText: null
        },
        password: {
            value: "",
            error: null,
            helperText: null
        },
        confirmPassword: {
            value: "",
            error: null,
            helperText: null
        },
    })

    const register = async () => {
        setLoading(true);
        const { data: d, error } = await signUp(data.email.value, data.password.value, supabase);
        if (error.message) {
            showMessage(error.message);
        }else {
            showMessage(t('user-creation-success'));
            return <Navigate to="/signin" />;
        }
        setLoading(false);
    }

    useEffect(() => {
        validateChange(data, setData, "email", t);
        validateChange(data, setData, "password", t);
    }, [data.email.value, data.password.value, data.confirmPassword.value])

    return  <Container className="app-background" component="main">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >   
                    <Avatar
                        sx={{ width: 180, height: 180 }}
                        src={logo}
                    />
                    <Typography component="h3" variant="h3">
                        {t('register')}
                    </Typography>
                    <Typography component="h5" variant="h5">
                        {t('welcome')}
                    </Typography>
                    <Box component="form" onSubmit={(e) => e.preventDefault()} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label={t('email')}
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={data.email.value}
                            error={data.email.error}
                            helperText={data.email.helperText}
                            onChange={(event: Object) => handleInputValue(data, setData, "email", event)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label={t('password')}
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={data.password.value}
                            error={data.password.error}
                            helperText={data.password.helperText}
                            onChange={(event: Object) => handleInputValue(data, setData, "password", event)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="confirm-password"
                            label={t('confirm-password')}
                            type="password"
                            id="confirm-password"
                            value={data.confirmPassword.value}
                            error={data.confirmPassword.error}
                            helperText={data.confirmPassword.helperText}
                            onChange={(event: Object) => handleInputValue(data, setData, "confirmPassword", event)}
                        />
                        <Box 
                            component="span"
                            sx={{
                                marginTop: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                            >
                            <Link to="/signin">{t('sign-in')}</Link>
                        </Box>
                        <Button
                            loading={loading}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={register}
                            disabled={data.email.error || data.password.error || data.confirmPassword.error}
                        >
                            {t('sign-up')}
                        </Button>
                    </Box>
                </Box>
            </Container>
};

export default SignUp;
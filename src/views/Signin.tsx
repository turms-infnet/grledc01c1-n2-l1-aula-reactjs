import { Container, Box, Button, Typography, TextField, Avatar } from "../components";
import logo from '../assets/images/logo.png';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { validateChange, validateEmail, validatePasswords } from "../services/validators";
import { handleInputValue } from "../services/actions";
import { signIn } from "../services/authentication";
import { useAppContext, useSnackbar } from "../Context";

const SignIn: React.FC = () => {
    const { t, supabase } = useAppContext();
    const { showMessage } = useSnackbar();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        email: {
            value: "tiagoluizrs@gmail.com",
            error: null,
            helperText: null
        },
        password: {
            value: "123456",
            error: null,
            helperText: null
        },
    })

    const login = async () => {
        setLoading(true);
        const { data: d, error } = await signIn(data.email.value, data.password.value, supabase);
        if (error && error.message === "Invalid login credentials") {
            showMessage(t('invalid-credentials'))
        }else {
            localStorage.setItem("session", JSON.stringify(d.session));
            localStorage.setItem("user", JSON.stringify(d.user));
            navigate("/");
        }
        setLoading(false);
    }

    useEffect(() => {
        validateChange(data, setData, "email", t);
        validateChange(data, setData, "password", t);
    }, [data.email.value, data.password.value])

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
                        {t('login')}
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
                        <Box 
                            component="span"
                            sx={{
                                marginTop: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                            >
                            <Link to="/signup">{t('sign-up')}</Link>
                        </Box>
                        <Button
                            loading={loading}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={login}
                            disabled={data.email.error || data.password.error}
                        >
                            {t('sign-in')}
                        </Button>
                    </Box>
                </Box>
            </Container>
};

export default SignIn;
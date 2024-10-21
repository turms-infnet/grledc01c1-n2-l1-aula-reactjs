import { useAppContext } from "../App";
import { Container, Box, Button, Typography, TextField, Avatar } from "../components";
import logo from '../assets/images/logo.png';

const SignIn = () => {
    const { t } = useAppContext();

    return  <Container component="main" maxWidth="xs">
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
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            {t('sign-in')}
                        </Button>
                    </Box>
                </Box>
            </Container>
};

export default SignIn;
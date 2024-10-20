import { useAppContext } from "../App";
import { Container, Box, Button, Typography, TextField } from "../components";


const SignIn = () => {
    const { t } = useAppContext();

    return <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
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
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
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
                        Sign In
                    </Button>
                </Box>
            </Box>
        </Container>
};

export default SignIn;
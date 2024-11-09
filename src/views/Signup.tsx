import { Avatar, Box, Button, Grid, TextField, Typography } from "../components";
import { useAppContext } from "../Context";
import logo from '../assets/img/logo.png';
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../services/authentication";
import { useState } from "react";
import { handleChange } from "../utils/core";
import { validateEmail, validPassword } from "../utils/validators";

const SignUp: React.FC = () => {
    const navigate = useNavigate();
    const { showSnackMessage, showAlertMessage, supabase } = useAppContext();
    const [data, setData] = useState({
        email: {
            value: "tiago.silva@prof.infnet.edu.br",
            error: null,
            helperText: null
        },
        password: {
            value: "123456",
            error: null,
            helperText: null
        },
        confirm_password: {
            value: "123456",
            error: null,
            helperText: null
        },
    })

    const verifyRegister = async () => {
        const emailValidation = validateEmail(data.email.value);
        const passwordValidation = validPassword(data.password.value);

        setData((v) => ({
            ...v,
            email: {
                value: v.email.value,
                error: emailValidation.error,
                helperText: emailValidation.helperText
            },
            password: {
                value: v.password.value,
                error: passwordValidation.error,
                helperText: passwordValidation.helperText
            }
        }));

        if (emailValidation.error || passwordValidation.error) {
            return;
        }

        if (data.password.value !== data.confirm_password.value) {
            showAlertMessage("As senhas não coincidem", "error");
            return;
        }
        
        let { data: response, error } = await signUp(data.email.value, data.password.value, supabase);
        
        if (error) {
            if (error.toString().indexOf("AuthApiError: User already registered") !== -1) {
                showSnackMessage("Usuário registrado");
            } else {
                showSnackMessage(error.toString());
            } 
        }else {
            showSnackMessage("Usuário criado com sucesso!");
            navigate("/signin")
        }
    }

    return  <Box
                sx={{
                    height: '100vh',
                    paddingTop: 8
                }}
            >
                <Grid 
                    sx={styles.boxAdjustment}
                    container={true}>
                    <Grid 
                        sx={styles.centerBox}
                        item={true} size={{xs: 12}}>
                        <Avatar
                            sx={{ width: 180, height: 180 }}
                            src={logo}
                        />
                    </Grid>
                    <Grid 
                        sx={{
                            ...styles.centerBox,
                            ...styles.marginTop
                        }}
                        item={true} size={{xs: 12}}>
                        <Typography variant="h3">Login</Typography>
                    </Grid>
                    <Grid 
                        sx={styles.centerBox}
                        item={true} size={{xs: 12}}>
                        <Typography variant="h5">Seja Bem-vindo!</Typography>
                    </Grid>
                    <Grid 
                        sx={styles.marginTop}
                        item={true} size={{xs: 12}}>
                        <TextField
                            label="E-mail"
                            fullWidth={true}
                            onChange={(event) => handleChange(data, setData, event.target.value, "email")}
                            value={data.email.value}
                            error={data.email.error}
                            helperText={data.email.helperText}
                        />
                    </Grid>
                    <Grid 
                        sx={styles.marginTop}
                        item={true} size={{xs: 12}}>
                        <TextField
                            label="Senha"
                            fullWidth={true}
                            onChange={(event) => handleChange(data, setData, event.target.value, "password")}
                            type="password"
                            error={data.password.error}
                            helperText={data.password.helperText}
                            value={data.password.value}/>
                    </Grid>
                    <Grid 
                        sx={styles.marginTop}
                        item={true} size={{xs: 12}}>
                        <TextField
                            label="Confirmar Senha"
                            fullWidth={true}
                            onChange={(event) => handleChange(data, setData, event.target.value, "confirm_password")}
                            type="password"
                            value={data.confirm_password.value}/>
                    </Grid>
                    <Grid 
                        sx={{
                            ...styles.centerBox,
                            ...styles.marginTop
                        }}
                        item={true} size={{xs: 12}}>
                        <Link to="/signin">Entrar</Link>
                    </Grid>
                    <Grid 
                        sx={styles.marginTop}
                        item={true} size={{xs: 12}}>
                        <Button 
                            fullWidth={true}
                            onClick={verifyRegister}>Registrar</Button>
                    </Grid>
                </Grid>
            </Box>
};

const styles = {
    centerBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxAdjustment: {
        padding: 2
    },
    marginTop: {
        marginTop: 4
    }
}

export default SignUp;
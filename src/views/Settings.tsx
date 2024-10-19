import { useAppContext, useSnackbar } from "../Context";
import { logout } from "../services/authentication";
import { useNavigate } from "react-router-dom";
import { AppBar, Button, Grid, Box, TextField, Typography, DatePicker } from "../components";
import { handleInputValue } from "../services/actions";
import { useEffect, useState } from "react";
import { list, saveOrUpdate } from "../services/database";
import { loadProfile } from "../utils/loader";
import dayjs from "dayjs";

const Settings: React.FC = () => {
    const { changeLanguage, supabase, t, user } = useAppContext();
    const { showMessage } = useSnackbar();

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        id: null,
        name: {
            value: "",
            error: null,
            helperText: null
        },
        birth: {
            value: "",
            error: null,
            helperText: null
        },
        weight: {
            value: "",
            error: null,
            helperText: null
        },
        height: {
            value: "",
            error: null,
            helperText: null
        },
    })

    const verifyLanguage = (language: string) => {
        const storedLanguage = localStorage.getItem('language');
        if (storedLanguage == language) {
            return "contained"
        }
        return "outlined"
    }

    const save = async () => {
        setLoading(true);
        console.log(data.birth.value)
        const d: any = {
            user_id: user ? user.id : null,
            name: data.name.value,
            birth: data.birth.value,
            weight: data.weight.value,
            height: data.height.value,
        };

        if (data.id) {
            d["id"] = data.id;
        }

        const { data: result, error } = await saveOrUpdate("profile_teacher", d, supabase);
        if (error) {
            showMessage(error.message);
        } else{
            showMessage(t("form-saved"));
            setTimeout(() => {
                navigate("/");
            }, 3000);
        }

        setLoading(false);
    }

    useEffect(() => {
        loadProfile(data, setData, user, supabase);
    }, []);

    return  <>
                <AppBar title={t("settings")}/>
                <Grid container={true} spacing={2} sx={{
                    marginTop: '1em',
                    padding: '1em'
                }}>
                    <Grid item={true} size={{ xs: 12 }}>
                        <Button onClick={() => changeLanguage('en')}
                            variant={verifyLanguage('en')}
                            sx={{...styles.button}}>{t('english')}</Button>
                    </Grid>
                    <Grid item={true} size={{ xs: 12 }}>
                        <Button onClick={() => changeLanguage('es')}
                            variant={verifyLanguage('es')}
                            sx={{...styles.button}}>{t('spanish')}</Button>
                    </Grid>
                    <Grid item={true} size={{ xs: 12 }}>
                        <Button onClick={() => changeLanguage('pt')} 
                            variant={verifyLanguage('pt')}
                            sx={{...styles.button}}>{t('portugues')}</Button>
                    </Grid>
                    <Grid item={true} size={{ xs: 12 }}>
                        <Button 
                            color="error"
                            onClick={async () => await logout(navigate, supabase)} sx={{...styles.button}}>Logout</Button>
                    </Grid>
                    <Grid item={true} size={{ xs: 12 }} sx={{ mt: 1 }}>
                        <Typography component="h5" variant="h5">{t("baby-data-title")}</Typography>
                    </Grid>
                    <Grid item={true} size={{ xs: 12 }}>
                        <Box component="form" onSubmit={(e) => e.preventDefault()} noValidate>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="name"
                                label={t('name')}
                                type="name"
                                id="name"
                                value={data.name.value}
                                error={data.name.error}
                                helperText={data.name.helperText}
                                onChange={(event: Object) => handleInputValue(data, setData, "name", event)}
                            />
                            <DatePicker
                                format="DD/MM/YYYY"
                                margin="normal"
                                required
                                fullWidth
                                id="birth"
                                label={t('birth')}
                                name="birth"
                                autoComplete="birth"
                                autoFocus
                                value={dayjs(data.birth.value)}
                                error={data.birth.error}
                                helperText={data.birth.helperText}
                                onChange={(value) => {
                                    setData({
                                        ...data,
                                        birth: {
                                            ...data['birth'],
                                            value: value
                                        }
                                    });
                                }}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="weight"
                                label={t('weight')}
                                type="weight"
                                id="weight"
                                value={data.weight.value}
                                error={data.weight.error}
                                helperText={data.weight.helperText}
                                onChange={(event: Object) => handleInputValue(data, setData, "weight", event)}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="height"
                                label={t('height')}
                                type="height"
                                id="height"
                                value={data.height.value}
                                error={data.height.error}
                                helperText={data.height.helperText}
                                onChange={(event: Object) => handleInputValue(data, setData, "height", event)}
                            />
                            <Button
                                loading={loading}
                                type="submit"
                                fullWidth
                                variant="contained"
                                onClick={save}
                                sx={{ mt: 3, mb: 2 }}
                                disabled={data.name.error || data.birth.error || data.weight.error}
                            >
                                {t('save')}
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </>
};

const styles = {
    button: {
        width: "100%"
    }
}

export default Settings;
import { useNavigate, useParams } from "react-router-dom";
import { useAppContext, useAlert, useSnackbar } from "../Context";
import { AppBar, Button, Diaper, Eat, Sleep, Grid } from "../components";
import { useEffect, useState } from "react";
import { list, saveOrUpdate } from "../services/database";
import ActionInterface from "../interfaces/IAction";
import { actionTypeList, actionTypeListToInt, validateForm } from "../utils/actions";

const Form: React.FC = () => {
    const { t, supabase, user } = useAppContext();
    const { showAlert } = useAlert();
    const { showMessage } = useSnackbar();
    const navigate = useNavigate();

    const params = useParams();
    const actionType = params.type;

    const [data, setData] = useState<ActionInterface | null>(null);
    const [loading, setLoading] = useState(false);

    const getForm = (actionType: string) => {
        switch(actionType) {
            case "1":
            return <Sleep data={data} setData={setData} t={t}/>;

            case "2":
            return <Eat data={data} setData={setData} t={t}/>;

            case "3":
            return <Diaper data={data} setData={setData} t={t}/>;

            default:
            return <Eat data={data} setData={setData} t={t}/>;
        }
    }

    const loadData = async (id: string) => {
        const { data: d, error } = await list("action_teacher", {
            "id": id
        }, 1, supabase);
        if (d.length === 1) {
            setData(d[0]);
        }
    }

    const save = async () => {
        setLoading(true);
        try {
            let actionTypeInt = 0; 
            if (actionType) {
                actionTypeInt = parseInt(actionType)
            }

            const d: ActionInterface = {
                user_id: user ? user.id : '',
                action_type: actionTypeInt,
                ...data
            }
            if (params.id) {
                d.id = params.id;
            }
            
            const validates = validateForm(actionTypeInt, d, t);
            if (validates.length > 0) {
                showAlert(validates.join('<br />'), "warning");
                return;
            }
            
            const { data: result, error } = await saveOrUpdate("action_teacher", d, supabase);
            if (error) {
                showMessage(error.message);
            } else{
                showMessage(params.id ? t("form-updated") : t("form-saved"));
                setTimeout(() => {
                    navigate("/");
                }, 3000);
            }
        } catch (err) {
            console.error(err);
            showMessage(err.toString());
        }
        setLoading(false);
    }

    useEffect(() => {
        if (params && params.id) {
            loadData(params.id);
        }
    }, [])

    return  <>
                <AppBar title={t(actionTypeListToInt[actionType])} trash={params.id}/>
                <Grid container={true} spacing={2} sx={{
                marginTop: '1em',
                padding: '1em'
                }}>
                    <Grid item={true} size={{ xs: 12 }}>
                        { getForm(actionType) }
                        <Button
                            loading={loading}
                            type="submit"
                            fullWidth
                            variant="contained"
                            onClick={save}
                            sx={{ mt: 3, mb: 2 }}
                        >
                            {t('save')}
                        </Button>
                    </Grid>
                </Grid>
            </>
};

export default Form;
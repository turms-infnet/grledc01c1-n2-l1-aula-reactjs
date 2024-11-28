import { useParams } from "react-router-dom";
import { useAppContext } from "../Context";
import { Button, Diaper, Eat, Sleep, Grid } from "../components";
import { useEffect, useState } from "react";

const Form = () => {
    const { translate } = useAppContext();

    const params = useParams();
    const actionType = params.type;

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);

    const getForm = (actionType) => {
        switch(actionType) {
            case "1":
            return <Sleep data={data} setData={setData} translate={translate}/>;

            case "2":
            return <Eat data={data} setData={setData} translate={translate}/>;

            case "3":
            return <Diaper data={data} setData={setData} translate={translate}/>;

            default:
            return <Eat data={data} setData={setData} translate={translate}/>;
        }
    }

    const loadData = async (id) => {
        
    }

    const save = async () => {
        const d = JSON.parse(localStorage.getItem("items"));
        let dFinal = []
        
        if(d){
            dFinal = [...d, data];
        }else{
            dFinal = [data];
        }
        localStorage.setItem("items", JSON.stringify(dFinal));
    }

    useEffect(() => {
        if (params && params.id) {
            loadData(params.id);
        }
    }, [])

    return  <>
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
                            {translate('save')}
                        </Button>
                    </Grid>
                </Grid>
            </>
};

export default Form;
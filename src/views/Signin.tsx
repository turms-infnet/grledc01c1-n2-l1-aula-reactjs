import { Button, DatePicker, DateTimePicker } from "../components";
import { useAppContext } from "../Context";

const SignIn: React.FC = () => {
    const { showSnackMessage, showAlertMessage } = useAppContext();


    return  <>
                <Button onClick={() => showSnackMessage("Mensagem customizada")}>Clique snack</Button>
                <Button onClick={() => showAlertMessage("Mensagem customizada", "success", "filled")}>Clique alert success</Button>
                <Button onClick={() => showAlertMessage("Mensagem customizada", "warning", "outlined")}>Clique alert warning</Button>
                <Button onClick={() => showAlertMessage("Mensagem customizada", "error")}>Clique alert error</Button>
                <Button onClick={() => showAlertMessage("Mensagem customizada", "info")}>Clique alert info</Button>

                <DateTimePicker 
                    ampm={false}
                    format="DD/MM/YYYY HH:mm"
                    onChange={(value) => console.log(value.toString())}
                />
                <DatePicker
                    format="DD/MM/YYYY"
                    onChange={(value) => console.log(value.toString())}
                />
            </>
};

export default SignIn;
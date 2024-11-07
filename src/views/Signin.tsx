import { Button, DatePicker, DateTimePicker } from "../components";
import { useAppContext } from "../Context";

const SignIn: React.FC = () => {
    const { showSnackMessage, showAlertMessage, translate, changeLanguage } = useAppContext();

    return  <>
                <Button onClick={() => showSnackMessage("Mensagem customizada")}>{translate("welcome")}</Button>
                <Button onClick={() => changeLanguage("es")}>ES</Button>
                <Button onClick={() => changeLanguage("en")}>EN</Button>
                <Button onClick={() => changeLanguage("pt")}>PT</Button>

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
import { AppBar } from "../components";
import { useAppContext } from "../Context";

const Dashboard: React.FC = () => {
    const { t } = useAppContext();

    return  <>
                <AppBar title={t("dashboard")}/>
            </>
};

export default Dashboard;
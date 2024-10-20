import { useAppContext } from "../App";

const Home = () => {
    const { t } = useAppContext();

    return <h1>{t('welcome')}</h1>
};

export default Home;
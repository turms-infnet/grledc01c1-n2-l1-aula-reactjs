import { get } from "../services/supabasedb";

const Dashboard: React.FC = () => {
    get();

    return 'Dashboard'
};

export default Dashboard;
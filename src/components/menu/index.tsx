import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../Context";
import { logout } from "../../services/authentication";

interface IMenuProps {};

const MenuComponent: React.FC<IMenuProps> = () => {
    const { changeLanguage, supabase } = useAppContext();
    const navigate = useNavigate();

    return <div>
                <button onClick={() => changeLanguage('en')}>English</button>
                <button onClick={() => changeLanguage('es')}>Español</button>
                <button onClick={() => changeLanguage('pt')}>Português</button>
                <button onClick={async () => await logout(navigate, supabase)}>Logout</button>
            </div>;
}

export default MenuComponent;
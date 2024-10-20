import { useAppContext } from "../../App";

interface IMenuProps {};

const MenuComponent: React.FC<IMenuProps> = () => {
    const { changeLanguage } = useAppContext();

    return <div>
                <button onClick={() => changeLanguage('en')}>English</button>
                <button onClick={() => changeLanguage('es')}>Español</button>
                <button onClick={() => changeLanguage('pt')}>Português</button>
            </div>;
}

export default MenuComponent;
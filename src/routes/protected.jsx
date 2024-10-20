import { Navigate, Outlet } from "react-router-dom";
import { Menu } from "../components";

const Protected = () => {
    const token = localStorage.getItem("token");

    return token ? 
        <>
            <Menu />
            <Outlet />
        </> : <Navigate to="/signin" />;
}

export default Protected;
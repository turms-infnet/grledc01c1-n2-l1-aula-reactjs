import { Navigate, Outlet } from "react-router-dom";
import { Menu } from "../components";

const Protected = () => {
    const session = localStorage.getItem("session");
    return session ? 
        <>
            <Menu />
            <Outlet />
        </> : <Navigate to="/signin" />;
}

export default Protected;
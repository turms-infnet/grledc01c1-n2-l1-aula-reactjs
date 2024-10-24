import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import Home from '../views/Home';
import Settings from '../views/Settings';
import SignUp from '../views/Signup';
import SignIn from '../views/Signin';
import Form from '../views/Form';
import Dashboard from '../views/Dashboard';
import Protected from "./protected";
import { handleVerificationProtected, isAuthenticated } from "../services/authentication";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route element={<Protected/>}>
                <Route index element={<Home />} loader={() => handleVerificationProtected()}/>
                <Route path="dashboard" element={<Dashboard />} loader={() => handleVerificationProtected()}/>
                <Route path="new/:type" element={<Form />} loader={() => handleVerificationProtected()}/>
                <Route path=":type/:id" element={<Form />} loader={() => handleVerificationProtected()}/>
            </Route>
            <Route path="signin" element={<SignIn />} loader={() => isAuthenticated()}/>
            <Route path="signup" element={<SignUp />} loader={() => isAuthenticated()}/>
        </Route>
    )
);

const Index = () => {
    return <RouterProvider router={router} />
}

export default Index;
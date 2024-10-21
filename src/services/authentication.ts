import { redirect } from "react-router-dom";
import ISignResponse from "../interfaces/ISignResponse";

const signUp = async (email: string, password: string, supabase: any): Promise<ISignResponse> => {
    return await supabase.auth.signUp({
        email,
        password
    })
}

const signIn = async (email: string, password: string, supabase: any): Promise<ISignResponse> => {
    return await supabase.auth.signInWithPassword({
        email,
        password,
    })
}

const isAuthenticated = () => {
    const session = localStorage.getItem("session");

    if (session) throw redirect("/");
    return null;
}

const handleVerificationProtected = () => {
    const session = localStorage.getItem("session");

    if (!session) throw redirect("/signin");
    return null;
}

const logout = async (navigate: any, supabase: any) => {
    await supabase.auth.signOut()

    localStorage.clear();
    navigate("/signin");
}

export {
    isAuthenticated,
    handleVerificationProtected,
    signUp,
    signIn,
    logout
}
import { redirect } from "react-router-dom";

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

const signIn = async (email, password, supabase) => {
    return await supabase.auth.signInWithPassword({
        email, password
    });
}

export {
    isAuthenticated,
    handleVerificationProtected,
    signIn
}
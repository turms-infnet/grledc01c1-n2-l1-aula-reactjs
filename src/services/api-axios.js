import axios from 'axios';
const api_url = import.meta.env.VITE_URL_API;

const public_endpoints = ["signin", "signup", "forgot-password", "code-confirm"]

const getHeader = (auth) => {
    const token = JSON.parse(localStorage.getItem("session")).access_token;

    const header = {
        'content-type': 'application/json'
    }

    if (auth){
        header['Authorization'] = `Bearer ${token}`;
    }

    return header;
}

const get = async (path, id) => {
    const auth = !public_endpoints.includes(path);
    let final_path = "";
    if(id){
        final_path = `/${id}`
    }

    return await axios({
        method: "GET",
        url: `${api_url}/${path}${final_path}`,
        headers: getHeader(auth)
    });
}

const post = async (path, data) => {
    const auth = !public_endpoints.includes(path);

    return await axios({
        method: "post",
        url: `${api_url}/${path}`,
        data: data,
        headers: getHeader(auth)
    });
}

const update = async (path, id, data) => {
    return await axios({
        method: "PUT",
        url: `${api_url}/${path}/${id}`,
        data: data,
        headers: getHeader(true)
    });
}

const drop = async (path, id) => {
    return await axios({
        method: "DELETE",
        url: `${api_url}/${path}/${id}`,
        headers: getHeader(true)
    });
}

export { 
    get,
    post,
    update,
    drop
}
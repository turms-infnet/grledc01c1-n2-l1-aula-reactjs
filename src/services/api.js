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

    const response = await fetch(`${api_url}/${path}${final_path}`, {
        method: 'GET',
        headers: getHeader(auth)
    });
    const data = await response.json()
    return {
        data: data,
        status: response.status
    }
}

const post = async (path, data) => {
    const auth = !public_endpoints.includes(path);

    const response = await fetch(`${api_url}/${path}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: getHeader(auth)
    })
    return {
        status: response.status
    }
}

const update = async (path, id, data) => {
    const response = await fetch(`${api_url}/${path}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: getHeader(true)
    })
    return {
        status: response.status
    }
}

const drop = async (path, id) => {
    const response = await fetch(`${api_url}/${path}/${id}`, {
        method: 'DELETE',
        headers: getHeader(true)
    })
    return {
        status: response.status
    }
}

export { 
    get,
    post,
    update,
    drop
}
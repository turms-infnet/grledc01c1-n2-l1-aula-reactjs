const generateUid = () => {
    return 'uid-' + Math.random().toString(36).substr(2, 18);
}

const update = (data, id) => {
    const totalData = list();
    const index = totalData.findIndex(item => item.id === id);
    totalData[index] = data;
    
    updateStorage(totalData);
}

const drop = (id) => {
    const totalData = list();
    const index = totalData.findIndex(item => item.id === id);
    totalData.splice(index, 1)
    
    updateStorage(totalData);
}

const get = (id) => {
    const totalData = list();

    return totalData.find((item) => item.id === id);
}

const list = () => {
    const data = localStorage.getItem("items");
    if(data) {
        return JSON.parse(data)
    }
    return [];
}

const save = (data) => {
    const totalData = list();

    const d = {
        id: generateUid(),
        ...data
    }

    totalData.push(d);
    updateStorage(totalData);
}

const updateStorage = (data) => {
    localStorage.setItem("items", JSON.stringify(data));
}

export {
    save,
    update,
    drop,
    get,
    list,
}
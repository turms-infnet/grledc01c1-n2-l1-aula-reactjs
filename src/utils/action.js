const handleInputChange = (field, value, data, setData) => {
    setData({...data, [field]: value})
}

const generateSubtitle = (item, translate) => {
    return 'oi'
}

export {
    handleInputChange,
    generateSubtitle
}
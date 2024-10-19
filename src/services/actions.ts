const handleInputValue = (data: any, setData: any, field: string, event: Object) => {
    setData({
        ...data,
        [field]: {
            ...data[field],
            value: event.target.value
        }
    });
}

export {
    handleInputValue
}
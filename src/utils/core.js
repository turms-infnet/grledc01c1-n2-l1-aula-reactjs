import dayjs from 'dayjs';

const adjustDateTimeForTimezone = (dateString) => {
    if (!dateString) return new Date();
    const dateUTC = dayjs.utc(dateString);
    const dateInUTCMinus = dateUTC.tz('America/Sao_Paulo');
    
    return dayjs(dateInUTCMinus.format());
};

const handleChange = (data, setData, value, field) => {
    const d = data;
    d[field].value = value
    setData(() => ({
        ...d
    }));
}

export {
    handleChange,
    adjustDateTimeForTimezone
}
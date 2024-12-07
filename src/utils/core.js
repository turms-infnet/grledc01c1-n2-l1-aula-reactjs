import dayjs from 'dayjs';

const adjustDateTimeForTimezone = (dateString) => {
    if (!dateString) return new Date();
    const dateUTC = dayjs.utc(dateString);
    // const dateInUTCMinus = dateUTC.tz('America/Sao_Paulo');
    
    return dayjs(dateUTC.format());
};

const calculateDuration = (startDate, type) => {
    const today = dayjs().startOf('day');
    const startUtc = dayjs.utc(startDate);
    
    switch(type) {
        case "days":
        return dayjs.duration(today - startUtc).asDays();

        case "hours":
        return dayjs.duration(today - startUtc).asHours();

        default:
        return dayjs.duration(today - startUtc).asMinutes()
    }
}

const handleChange = (data, setData, value, field) => {
    const d = data;
    d[field].value = value
    setData(() => ({
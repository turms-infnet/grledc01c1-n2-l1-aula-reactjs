import dayjs from 'dayjs';

const adjustDateTimeForTimezone = (dateString) => {
    if (!dateString) return new Date();
    const dateUTC = dayjs.utc(dateString);
    const dateInUTCMinus = dateUTC.tz('America/Sao_Paulo');
    
    return dayjs(dateInUTCMinus.format());
};

const getUser = () => {
    const user = localStorage.getItem("session");
    if(user) {
        return JSON.parse(user).user
    }
    return null;
}

const handleChange = (data, setData, value, field) => {
    const d = data;
    d[field].value = value
    setData(() => ({
        ...d
    }));
}

const calculateDuration = (startTimeStr, type) => {
  const startTime = dayjs.utc(startTimeStr);
  const endTime = dayjs().startOf('day');

  if (type === "day") {
    return dayjs.duration(endTime.diff(startTime)).asDays();
  }
  else if (type === "hour") {
    return dayjs.duration(endTime.diff(startTime)).asHours();
  }
  else {
    return dayjs.duration(endTime.diff(startTime)).asMinutes();
  }
}

export {
    handleChange,
    adjustDateTimeForTimezone,
    getUser,
    calculateDuration
}
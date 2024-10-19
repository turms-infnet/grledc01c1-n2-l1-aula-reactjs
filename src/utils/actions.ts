import dayjs from "dayjs";
import ActionInterface from "../interfaces/IAction";
import { adjustDateTimeForTimezone, calculateDuration } from "./date";

const handleInputChange = (field: string, value: any, data: any, setData: any) => {
    setData({ ...data, [field]: value });
};

const actionTypeList = {
    "sleep": 1,
    "eat": 2,
    "diaper": 3,
}

const actionTypeListToInt = {
    1 : "sleep",
    2: "eat",
    3: "diaper",
}

const typeColor = {
    1: "#4b10a9",
    2: "#47c869",
    3: "#f4cc1d",
}

const validateSleep = (d: ActionInterface, t: (key: string) => string): string[] => {
    const requireds = [];
    if (!d.start_date) {
        requireds.push(t("field-start-date-required"));
    }

    if (!d.end_date) {
        requireds.push(t("field-end-date-required"));
    }

    return requireds;
}

const validateEat = (d: ActionInterface, t: (key: string) => string): string[] => {
    const requireds = [];
    if (!d.type) {
        requireds.push(t("field-type-required"));
    }

    if (d.type === 1) {
        if (!d.start_date) {
            requireds.push(t("field-date-required"));
        }
    }

    if (d.type === 2) {
        if (!d.side) {
            requireds.push(t("field-side-required"));
        }
        if (!d.start_date) {
            requireds.push(t("field-start-date-required"));
        }
        if (!d.end_date) {
            requireds.push(t("field-end-date-required"));
        }
    }

    return requireds;
}

const validateDiaper = (d: ActionInterface, t: (key: string) => string): string[] => {
    const requireds = [];
    if (!d.type) {
        requireds.push(t("field-type-required"));
    }

    if (!d.start_date) {
        requireds.push(t("field-date-required"));
    }

    return requireds;
}

const validateForm = (actionType: number, d: ActionInterface, t: (key: string) => string): string[] => {
    switch (actionType) {
        case 1:
        return validateSleep(d, t);

        case 2:
        return validateEat(d, t);

        case 3:
        return validateDiaper(d, t);

        default:
        return validateDiaper(d, t);
    }
}

const getSide = (side: number, t: (key: string) => string) => {
    switch (side) {
        case 1:
        return t('left');

        case 2:
        return t('right')

        case 3:
        return t('both')

        default:
        return t('both')
    }
}

const subtitleSleep = (data: any, t: (key: string) => string) => {
    const start_hour = dayjs(adjustDateTimeForTimezone(data.start_date));
    const end_hour = dayjs(adjustDateTimeForTimezone(data.end_date));

    const duration = calculateDuration(start_hour.format(), end_hour.format(), "min");
    return `${duration} ${t('min')}., ${t('from')} ${start_hour.format('HH:mm')} ${t('to')} ${end_hour.format('HH:mm')}`;
}

const subtitleEat = (data: any, t: (key: string) => string) => {
    const hour = dayjs(adjustDateTimeForTimezone(data.start_date)).format('HH:mm');
    if (data.type === 1) {
        return `${hour}, ${data.quantity}ml`;
    } else {
        const start_hour = dayjs(adjustDateTimeForTimezone(data.start_date));
        const end_hour = dayjs(adjustDateTimeForTimezone(data.end_date));
        const duration = calculateDuration(start_hour.format(), end_hour.format(), "min");

        return `${hour}, ${duration} ${t('min')}. ${getSide(data.side, t)}`;
    }
}

const subtitleDiaper = (data: any, t: (key: string) => string) => {
    const hour = dayjs(adjustDateTimeForTimezone(data.start_date)).format('HH:mm');

    switch(data.type){
        case 1:
        return `${t('diaper-wet')} ${hour}`;

        case 2:
        return `${t('diaper-dirty')} ${hour}`;

        case 3:
        return `${t('diaper-both')} ${hour}`;

        case 4:
        return `${t('diaper-clean')} ${hour}`;

        default:
        return `${t('diaper-clean')} ${hour}`;
    }
}

const generateSubtitle = (data: any, t: (key: string) => string) => {
    switch (data.action_type) {
        case 1:
        return subtitleSleep(data, t);

        case 2:
        return subtitleEat(data, t);

        case 3:
        return subtitleDiaper(data, t);

        default:
        return subtitleSleep(data, t);
    }
}

export {
    handleInputChange,
    validateForm,
    generateSubtitle,
    actionTypeList,
    actionTypeListToInt,
    typeColor
}
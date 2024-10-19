import dayjs from "dayjs";
import { list } from "../services/database";

const loadProfile = async (data, setData, user, supabase) => {
    if (user) {
        const { data: d, error } = await list("profile_teacher", {
            "user_id": user.id
        }, 1, supabase);
        if (d.length === 1) {
            setData({
                id: d[0].id,
                name: {
                    value: d[0].name,
                    error: null,
                    helperText: null
                },
                birth: {
                    value: dayjs(d[0].birth),
                    error: null,
                    helperText: null
                },
                weight: {
                    value: d[0].weight,
                    error: null,
                    helperText: null
                },
                height: {
                    value: d[0].height,
                    error: null,
                    helperText: null
                },
            });
        }
    }
}

export {
    loadProfile
}
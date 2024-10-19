import { useTheme } from "@mui/material/styles";
import { Grid, CardNewItem, Box, IconButton, Avatar, CustomList } from "../components";
import { useAppContext } from "../Context";
import babyImage from '../assets/images/baby.png';

import CribIcon from '@mui/icons-material/Crib';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import SpaIcon from '@mui/icons-material/Spa';

import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { list } from "../services/database";

import ActionInterface from "../interfaces/IAction";
import { loadProfile } from "../utils/loader";
import { calculateDuration, roundDays } from "../utils/date";
import dayjs from "dayjs";

const Home: React.FC = () => {
    const { t, user, supabase } = useAppContext();
    const theme = useTheme();
    const navigate = useNavigate();
    const [baby, setBaby] = useState({});
    const [page, setPage] = useState(1);
    const [data, setData] = useState<ActionInterface | null>(null);

    const actionsMain = [
        {
            title: t("sleep"),
            actionType: 1,
            icon: CribIcon,
            color: "#4b10a9"
        },
        {
            title: t("eat"),
            actionType: 2,
            icon: RestaurantMenuIcon,
            color: "#47c869"
        },
        {
            title: t("diaper"),
            actionType: 3,
            icon: SpaIcon,
            color: "#f4cc1d"
        }
    ]

    const loadData = async () => {
        const { data: d, error } = await list("action_teacher", {
            "user_id": user ? user.id : null
        }, page, supabase);
        setData(d);
    }

    useEffect(() => {
        loadProfile(baby, setBaby, user, supabase);
        loadData();
    }, []);

    return  <Grid container={true}>
                <Grid size={{ xs: 12 }}
                    sx={{
                        height: '25vh'
                    }}
                >
                    <Grid container={true}
                        sx={{
                            alignItems: 'flex-end',
                            marginTop: '1em'
                        }}
                    >
                        <Grid size={{ xs: 4 }}>
                            <Box
                                sx={{
                                    ...styles.centerBox,
                                    ...styles.centerBox
                                }}
                            >
                                <IconButton
                                    sx={{
                                        ...styles.iconButton,
                                        border: `2px solid ${theme.palette.primary.main}`
                                    }}
                                    onClick={() => navigate("/dashboard")}
                                >
                                    <SignalCellularAltIcon
                                        sx={{
                                        ...styles.icon,
                                        color: `${theme.palette.primary.main}`,
                                    }} />
                                </IconButton>
                                <Box sx={{
                                    ...styles.centerBox,
                                    ...styles.boxText
                                }}>
                                    <Typography component="p" sx={{...styles.text2}}>{baby?.height?.value} cm</Typography>
                                    <Typography component="p" sx={{...styles.text3}}>Comprimento</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 4 }}>
                            <Box
                                sx={{
                                    ...styles.centerBox
                                }}
                            >
                                <Avatar
                                    sx={{ width: 90, height: 90 }}
                                    src={babyImage}
                                />
                                <Box sx={{
                                    ...styles.centerBox,
                                    ...styles.boxText
                                }}>
                                    <Typography component="p" sx={{...styles.text1}}>{baby?.name?.value}</Typography>
                                    <Typography component="p" sx={{...styles.text3}}>{roundDays(calculateDuration(baby?.birth?.value, dayjs().startOf('day').format(), "day"))} {t('days')}</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 4 }}>
                            <Box
                                sx={{
                                    ...styles.centerBox
                                }}
                            >
                                <IconButton
                                    sx={{
                                        ...styles.iconButton,
                                        border: `2px solid ${theme.palette.primary.main}`
                                    }}
                                    onClick={() => navigate("/settings")}
                                >
                                    <SettingsIcon
                                        sx={{
                                        ...styles.icon,
                                        color: `${theme.palette.primary.main}`,
                                    }}
                                    />
                                </IconButton>
                                <Box sx={{
                                    ...styles.centerBox,
                                    ...styles.boxText
                                }}>
                                    <Typography component="p" sx={{...styles.text2}}>{baby?.weight?.value} kg</Typography>
                                    <Typography component="p" sx={{...styles.text3}}>Peso</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid 
                    item={true}
                    size={{ xs: 12 }}
                    sx={{
                        backgroundColor: theme.palette.primary.main,
                        height: '75vh'
                    }}
                >
                    <Grid container={true}
                        sx={{
                            marginTop: '-50px',
                            padding: 2
                        }}
                    >
                        <Grid size={{ xs: 12 }} item={true}>
                            <Grid container={true} spacing={2}>
                                {
                                    actionsMain.map(action => <Grid size={{ xs: 4 }}>
                                        <CardNewItem
                                            title={action.title}
                                            Icon={action.icon}
                                            color={action.color}
                                            actionType={action.actionType}
                                        />
                                    </Grid>)
                                }
                            </Grid>
                            <Grid container={true} sx={{
                                marginTop: '1em'
                            }}>
                                <Grid size={{ xs: 12 }}>
                                    { data ? <CustomList
                                        sx={{
                                            overflow: 'auto',
                                            maxHeight: '56.5vh'
                                        }}
                                        items={data}
                                    /> : null}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
};

const styles = {
    centerBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconButton: {
        height: '2.5em',
        width: '2.5em',
    },
    icon: {
        fontSize: '1.5em'
    },
    boxText: {
        marginTop: '.5em'
    },
    text1: {
        wordBreak: 'break-all',
        fontSize: '1.2em',
        fontWeight: '500',
        fontFamily: '"Lato", sans-serif',
    },
    text2: {
        wordBreak: 'break-all',
        fontSize: '.8em',
        fontWeight: '600',
        fontFamily: '"Lato", sans-serif',
    }, 
    text3: {
        wordBreak: 'break-all',
        fontSize: '.8em',
        fontWeight: '400',
    }
}

export default Home;
import { IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Grid, Avatar, Box, Typography, CardNewItem, CustomList } from "../components";
import babyImage from '../assets/img/baby.png';

import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import SettingsIcon from '@mui/icons-material/Settings';

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ACTIONS } from "../constants/actions";
import { list } from "../services/database";

const Home: React.FC = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const [data, setData] = useState([]);

    const loadData = () => {
        const d = list();
        if(d) {
            setData(d);
        }
    }

    useEffect(() => {
        loadData();
    }, [])

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
                                    <Typography component="p" sx={{...styles.text2}}>54 cm</Typography>
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
                                    <Typography component="p" sx={{...styles.text1}}>Benício</Typography>
                                    <Typography component="p" sx={{...styles.text3}}>x Dias</Typography>
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
                                    <Typography component="p" sx={{...styles.text2}}>4.200 kg</Typography>
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
                                    ACTIONS.map(action => <Grid size={{ xs: 4 }}>
                                        <CardNewItem
                                            title={action.title}
                                            Icon={action.Icon}
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
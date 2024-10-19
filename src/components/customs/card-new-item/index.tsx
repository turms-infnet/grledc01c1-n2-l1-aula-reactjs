import { SvgIconComponent } from "@mui/icons-material";
import AddIcon from '@mui/icons-material/Add';
import { Card, Box, Fab, Typography } from "../..";
import { useNavigate } from "react-router-dom";

interface CardNewItemProps {
  Icon: SvgIconComponent;
  title: string;
  color: string;
  actionType: string;
}

const CardNewItemComponent: React.FC<CardNewItemProps> = ({Icon, color, title, actionType}) => {
    const navigate = useNavigate();

    return <Card sx={{
        overflow: 'visible',
        borderRadius: '10%'
    }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Icon 
                        sx={{
                            marginTop: '.2em',
                            fontSize: '3em',
                            color: color
                        }}/>
                    <Typography
                        sx={{
                            fontSize: '.85em',
                            marginTop: '0.5em',
                            fontWeight: '700',
                            textAlign: 'center',
                            wordWrap: "break-word",
                            width: "90%"
                        }}
                    >{title}</Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Typography
                        sx={{
                            marginTop: '0.5em',
                            fontSize: '0.8em',
                            fontWeight: '400',
                            color: "#8f8f8f"
                        }}
                    >Adicione algo</Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <Fab
                        size="small"
                        sx={{
                            color: color,
                            backgroundColor: "#fff",
                            position: 'relative',
                            bottom: '-20px'
                        }}
                        onClick={() => navigate(`/new/${actionType}`)}
                    ><AddIcon /></Fab>
                </Box>
            </Card>
}

export default CardNewItemComponent;
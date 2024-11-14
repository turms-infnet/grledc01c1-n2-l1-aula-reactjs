import { useNavigate } from "react-router-dom";
import { Box, Card, Fab, Typography } from "..";
import AddIcon from '@mui/icons-material/Add';

const CardNewItem = ({ title, actionType, Icon, color }) => {
    const navigate = useNavigate();

    return  <Card>
                <Box>
                    <Icon 
                        sx={{
                            color: color
                        }}
                    />
                    <Typography>{title}</Typography>
                </Box>
                <Box>
                    <Typography>Adicione algo</Typography>
                </Box>
                <Box>
                    <Fab
                        onClick={() => {
                            navigate(`new/${actionType}`)
                        }} 
                        sx={{
                            color: color,
                            backgroundColor: "#fff"
                        }}>
                        <AddIcon/>
                    </Fab>
                </Box>
            </Card>
}

export default CardNewItem;
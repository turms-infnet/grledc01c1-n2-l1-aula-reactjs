import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';

import CribIcon from '@mui/icons-material/Crib';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import SpaIcon from '@mui/icons-material/Spa';
import { generateSubtitle } from '../../utils/action';
import { useAppContext } from '../../Context';

const CustomList = ({items, ...props}) => {
    const navigate = useNavigate();
    const { translate } = useAppContext();

    const getIcon = (typeAction) => {
        switch (typeAction) {
        case 1:
            return <CribIcon/>;
        case 2:
            return <RestaurantMenuIcon/>;
        case 3:
            return <SpaIcon/>;
        default:
            return <RestaurantMenuIcon/>;
        }
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

    return (
        <List {...props}>
        {
            items.map((item, index) => {
                const typeStr = actionTypeListToInt[item.action_type];
                return <ListItem  sx={{
                                    backgroundColor: "#fff",
                                    borderRadius: "60px",
                                    marginTop: '1em'
                                }}
                                id={`new-item-list-${index}`}
                                onClick={() => navigate(`/${item.action_type}/${item.id}`)}
                        >
                            <ListItemAvatar>
                                <Avatar
                                sx={{ bgcolor: typeColor[item.action_type] }}
                                >
                                    {getIcon(item.action_type)}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={translate(typeStr)} secondary={generateSubtitle(item, translate)} />
                        </ListItem>
            })
        }
        </List>
    );
}

export default CustomList;
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import { actionTypeListToInt, generateSubtitle, typeColor } from '../../../utils/actions';

import CribIcon from '@mui/icons-material/Crib';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import SpaIcon from '@mui/icons-material/Spa';
import ActionInterface from '../../../interfaces/IAction';
import { useAppContext } from '../../../Context';

interface IFolderList {
  items: ActionInterface[],
  props: any
}

const FolderListComponent: React.FC<IFolderList> = ({items, ...props}) => {
  const navigate = useNavigate();
  const { t } = useAppContext();

  const getIcon = (typeAction: number) => {
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

  return (
    <List {...props}>
      {
        items.map((item: ActionInterface, index: number) => {
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
                        <ListItemText primary={t(typeStr)} secondary={generateSubtitle(item, t)} />
                    </ListItem>
        })
      }
    </List>
  );
}

export default FolderListComponent;
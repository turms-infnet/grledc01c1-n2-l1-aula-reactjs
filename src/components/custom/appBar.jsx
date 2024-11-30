import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { IconButton, Box } from '..';

const AppBarComponent = ({...props}) => {
    const navigate = useNavigate();

    return <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{
                        position: 'relative',
                        zIndex: '2'
                    }}
                    onClick={() => navigate("/")}
                >
                    <ArrowBackIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ 
                    flexGrow: 1,
                    textAlign: 'center',
                    position: 'absolute',
                    left: '0',
                    width: '100%',
                    zIndex: '1'
                }}>
                    {props.title}
                </Typography>
                {
                    props.id ?   <Box sx={{ 
                                        display: { xs: 'flex', md: 'none' },
                                        position: 'absolute',
                                        right: '1.5em'    
                                    }}>
                                    <IconButton
                                        size="large"
                                        edge="end"
                                        color="inherit"
                                        aria-label="menu"
                                        sx={{
                                            position: 'relative',
                                            zIndex: '2'
                                        }}
                                        onClick={props._delete}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </Box> : null
                }
            </Toolbar>
        </AppBar>
}

export default AppBarComponent;
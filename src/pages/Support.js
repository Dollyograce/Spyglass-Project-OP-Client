import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import EmailIcon from '@mui/icons-material/Email';
import ChatIcon from '@mui/icons-material/Chat';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Container } from '@mui/material';

import Card from '@mui/material/Card';
import { useEffect, useState } from 'react';
import { format } from 'date-fns'
import MenuIcon from '@mui/icons-material/Menu';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import { AppBar, Grid, Menu, MenuItem, Typography } from '@mui/material';
import { Toolbar } from '@mui/material';
import { IconButton } from '@mui/material';
import Theme from './Theme';
import { ThemeProvider } from '@emotion/react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import PersonIcon from '@mui/icons-material/Person';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import logo from '../components/Spyglass-logos_transparent.png';
import { useNavigate } from 'react-router-dom';



const Search = styled('div')(({ theme }) => ({
  position: 'sticky',
  alignItems: 'right',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(12),
    width: 'auto',
  },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function FloatingActionButtonExtendedSize()  {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState([]);
const handleOpenMenu = e => {
    setAnchorEl(e.currentTarget);
};
const handleMenuClose = () =>{
    setAnchorEl(null);
};
  return (
    <Container maxWidth= "100%"> 
     <div>
        <header>
            <AppBar position='fixed'>
                <Toolbar>
                    <ThemeProvider theme={Theme}>
                            <IconButton
                            aria-controls='menu'
                            onMouseOver={handleOpenMenu}
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: 2 }}>
                                <MenuIcon>
                                    </MenuIcon>
                            </IconButton>
                        </ThemeProvider>
                        
                        <Typography >
                        Today's Date { format(new Date(), 'do MMMM Y') }
                        </Typography>
                        <Grid container justifyContent='center'>
                        <Typography 
                        variant='h6'
                        >
                            Welcome To Spyglass
                        
                        </Typography>
                        </Grid>
                        <Grid>
                        <Search >
                                <SearchIconWrapper >
                                    <SearchIcon/>
                            </SearchIconWrapper>
                            <StyledInputBase
                            placeholder="Search..."
                            inputProps={{ 'aria-label' : 'search'}}
                            />
                            </Search>
                        </Grid>
                </Toolbar>
            </AppBar>
            <Menu 
            style={{marginTop: '25px'}}
            id='menu' 
            onClose= {handleMenuClose}
            anchorEl={anchorEl} 
            open= {Boolean(anchorEl) }>
                <MenuItem onClick= {handleMenuClose}>Return Home</MenuItem>
                <MenuItem onClick= {handleMenuClose}>Goals Dislpay</MenuItem>
                <MenuItem onClick= {handleMenuClose}>Search</MenuItem>
                <MenuItem onClick= {handleMenuClose}>About</MenuItem>
                <MenuItem onClick= {handleMenuClose}>Support</MenuItem>
                <MenuItem onClick= {handleMenuClose}>How To Navigate</MenuItem>
            </Menu>
        </header>
     </div>
     


    <h1>Contact Us
      </h1>
      <h2>General Support</h2>
      <FacebookIcon color="primary"/> <InstagramIcon /> <LinkedInIcon color="primary"/>

     <Container>
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        
      }}
    >
       
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ContactPhoneIcon color="primary" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Phone" secondary="1-800-999-9898" />
      </ListItem>
     
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <EmailIcon color="primary" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Email" secondary="Email your questions or concerns for a response within 24 hours to support@spyglass.com" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ChatIcon color="primary" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="AskSpy" secondary="Chat with our Virtual Assistant" />
      </ListItem>
    </List>

</Container>
    
    </Container>);
}

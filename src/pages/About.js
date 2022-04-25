import * as React from 'react';
import { styled } from '@mui/material/styles';
import { fontFamily, fontStyle } from '@mui/system';
import { IoMdBody } from 'react-icons/io';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Accordion from  './Accordion'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { alpha } from '@mui/material/styles'
import { AppBar, Container, Grid, Menu, MenuItem } from 'mui/material';
import { Toolbar } from '@mui/material';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyle}  from '@mui/icons-material/Style';
import { black, red } from '@mui/icons-material/';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { ThemeProvider } from '@emotion/react';
import Theme from './Theme';
 import { format } from 'date-fns';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';


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


    <Div>
       <header>
           <AppBar position='fixed'>
               <Toolbar>
                   <ThemeProvider theme={Theme}>
                           <IconButton
                           aria-controls='menu'
                           onMouseOver={handleOpenMenu}
                           size="large"
                           edge="star"
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
    </Div>


const [anchorEl, setAnchorEl] = useState(null);
    const handleOpenMenu = e => {
        setAnchorEl(e.currentTarget);
    };
    const handleMenuClose = () =>{
        setAnchorEl(null);
    };












const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(5)

    
 }));

  
function About(){
    const [anchorEl, setAnchorEl] = useState(null);
    const handleOpenMenu = e => {
        setAnchorEl(e.currentTarget);
    };
    const handleMenuClose = () =>{
        setAnchorEl(null);
    };


    return(
        


       <Div className="About">
            <h1>About Spyglass</h1>
            <img src= "/images/aboutbackground.jpeg" alt="" height = {200} width = {200} />
            <Accordion></Accordion>
        </Div>

        
       
    
    );

}

export default About;

    




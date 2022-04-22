import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import React from 'react';
import { AppBar, Container, Menu, MenuItem, Typography } from '@mui/material';
import { Toolbar } from '@mui/material';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyle}  from '@mui/icons-material/Style';
import { black, red } from '@mui/icons-material/';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { ThemeProvider } from '@emotion/react';
import Theme from './Theme';



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


  


function Home(){
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const handleOpenMenu = e => {
        setAnchorEl(e.currentTarget);
    };
    const handleMenuClose = () =>{
        setAnchorEl(null);
    };
    const logMeOut = () => {
        sessionStorage.removeItem("Auth Token");
        navigate("/login");
        
           
    }

   
    useEffect(()=>{
        axios.get("http://localhost:8080/me")
    },[])
    return(
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
                    <Typography 
                    variant='h6'
                    position={'center'}>
                        Spyglass
                        <Search position ='right'>
                            <SearchIconWrapper >
                                <SearchIcon/>
                        </SearchIconWrapper>
                        <StyledInputBase
                        placeholder="Search..."
                        inputProps={{ 'aria-label' : 'search'}}
                        />
                        </Search>
                    </Typography>
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
    </Container>);

    


}



export default Home;
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import React from 'react';
import { AppBar, Container, Grid, Menu, MenuItem, Typography } from '@mui/material';
import { Toolbar } from '@mui/material';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyle}  from '@mui/icons-material/Style';
import { black, red } from '@mui/icons-material/';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { ThemeProvider } from '@emotion/react';
import Theme from './Theme';
import { format } from 'date-fns'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import ProgressBar from '../components/ProgressBar';
import Paper from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';



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
       // axios.get("http://localhost:8080/me")
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
     <div>
     <Grid Container spacing ={2} direction="column" alighItems="center" justify="center" style={{ minHeight: '100vh' }}>
         <Grid item xs={2}>
     <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="http://cdn.sandals.com/sandals/v12/images/resorts/smb/home/main-slider/couple-and-beach.jpg"
          alt="jamaica"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Going to Jamaica
            <ProgressBar></ProgressBar>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <p>Target Saving Amount: $1000</p>
            <p>Amount Saved: $100</p>
            <p>Target Goal Date: 09/01/2022</p>
      
          </Typography>

        </CardContent>
        <CardActions>
        <Button size="small">Edit Goal</Button>
        <Button size="small">Delete Goal</Button>
      </CardActions>
      </CardActionArea>
    </Card>
    </Grid>
    </Grid>
    </div>
    </Container>);

    



}



export default Home;
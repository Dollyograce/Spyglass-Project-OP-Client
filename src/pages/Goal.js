import React from 'react';
import Card from '@mui/material/Card';
import { useEffect, useState } from 'react';
import { format } from 'date-fns'
import MenuIcon from '@mui/icons-material/Menu';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions, Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import { AppBar, Grid, Menu, MenuItem, Typography } from '@mui/material';
import { Toolbar } from '@mui/material';
import { IconButton } from '@mui/material';
import Theme from './Theme';
import { ThemeProvider } from '@emotion/react';









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

export default function VacationGoalCard() {
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
     
   <div>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://www.pngitem.com/pimgs/m/407-4070149_visitor-travel-vacation-white-icon-png-transparent-png.png"
          alt="Vacation"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Vacation 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Vacation
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  </div>
    </Container>
    
  );
}

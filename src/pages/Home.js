import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';


function Home(){
    const navigate = useNavigate();
    const logMeOut = () => {
        sessionStorage.removeItem("Auth Token");
        navigate("/login");
    }

    useEffect(()=>{
        axios.get("http://localhost:8080/me")
    },[])
    return(<>
        <h1>Home *Welcome Back Bob*</h1>
        <button onClick={logMeOut}>Log Out</button>
        <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <Button variant="contained" {...bindTrigger(popupState)}>
              Menu
            </Button>
            <Menu {...bindMenu(popupState)}>
              <MenuItem onClick={popupState.close}>Profile</MenuItem>
              <MenuItem onClick={popupState.close}>My account</MenuItem>
              <MenuItem onClick={popupState.close}>Directions</MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    
  

    </>);





    
}

export default Home;
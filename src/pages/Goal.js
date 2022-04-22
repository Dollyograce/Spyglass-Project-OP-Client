import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import PersonIcon from '@mui/icons-material/Person';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import logo from '../components/Spyglass-logos_transparent.png';
import { useNavigate } from 'react-router-dom';



export default function FloatingActionButtonExtendedSize() {


  const navigate = useNavigate();
  return (
    <><img src={logo} height="250px" className="logo" alt=""></img><><h1>Welcome, Username!
    </h1>
      <h2>What are your current savings goals?</h2>

      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <div className='col-12'>
          <Fab variant="extended" color="primary" aria-label="add" onClick={() => navigate("/create")}>
            <BeachAccessIcon sx={{ mr: 1 }} />
            Vacation
          </Fab>
        </div>
        <div className='col-12'>
          <Fab variant="extended" color="primary" aria-label="add" onClick={() => navigate("/create")}>
            <WorkIcon sx={{ mr: 1 }} />
            Business
          </Fab>
        </div>
        <div className='col-12'>
          <Fab variant="extended" color="primary" aria-label="add" onClick={() => navigate("/create")}>
            <PersonIcon sx={{ mr: 1 }} />
            Personal
          </Fab>
        </div>
        <div className='col-12'>
          <Fab variant="extended" color="primary" aria-label="add" onClick={() => navigate("/create")}>
            <SchoolIcon sx={{ mr: 1 }} />
            Education
          </Fab>
        </div>
        <div className='col-12'>
          <Fab variant="extended" color="primary" aria-label="add" onClick={() => navigate("/create")}>
            <LightbulbIcon sx={{ mr: 1 }} />
            Custom Goal
          </Fab>
        </div>
      </Box></></>
  );
}
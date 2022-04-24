import * as React from 'react';
import { styled } from '@mui/material/styles';
import { fontFamily, fontStyle } from '@mui/system';
import { IoMdBody } from 'react-icons/io';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import  Accordion from  './Accordion'









const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(5)

    
 }));

  
function About(){


    return(
        


       <Div className="About">
            <h1>About Our Company</h1>
            <img src= "/images/aboutbackground.jpeg" alt="" height = {200} width = {200} />
            <Accordion></Accordion>
        </Div>
       
    
    );

}

export default About;

    




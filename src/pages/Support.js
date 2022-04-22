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

export default function () {
    
  return (

    <><h1>Contact Us
      </h1>
      <h2>General Support for Spyglass</h2>
      <FacebookIcon /> <InstagramIcon /> <LinkedInIcon />

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
            <ContactPhoneIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Phone" secondary="1-800-999-9898" />
      </ListItem>
     
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <EmailIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Email" secondary="Email your questions or concerns for a response within 24 hours to support@spyglass.com" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ChatIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="AskSpy" secondary="Chat with our Virtual Assistant" />
      </ListItem>
    </List>
    </Container> 

    </>
    
  );
}



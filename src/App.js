import React, { useState } from 'react';
import { Button, AppBar, Toolbar, Typography, Box, Grid, TextField, Paper, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import ContactMailIcon from '@mui/icons-material/ContactMail';


const tickets = [
  { id: 1, name: 'Emily Davis' },
  { id: 2, name: 'Robert Thompson' },
  { id: 3, name: 'Mark Wilson' },
  { id: 4, name: 'Eli Freid' },
  { id: 5, name: 'Dmitry Simon' },
  { id: 6, name: 'Omer Mualem' },
  { id: 7, name: 'Revital mutuko' },
];

const theme = createTheme({
  palette: {
    primary: {
      main: '#884eb9',
    },
    secondary: {
      main: '#C4321e',
    },
  },
});

function App() {
  const [activeTicket, setActiveTicket] = useState(null);

  const handleTicketClick = (ticketId) => {
    fetch(`http://localhost:9080/ai/${ticketId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }
        return response.json();
      })
      .then(json => {
        setActiveTicket({
          id: ticketId,
          name: tickets.find(ticket => ticket.id === ticketId).name,
          messages: [json.summary, json.technical, json.personalization]
        });
      })
      .catch(function() {
        console.log("There was an error making the API call.");
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <AppBar position="static" sx={{ mb: 5 }}>
          <Toolbar>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>Customer Support Dashboard</Typography>
          </Toolbar>
        </AppBar>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 3, color: 'text.secondary' }}>
              <Typography variant="h6" sx={{ mt: 3, fontWeight: 600 }}>Ticket Details</Typography>
              {activeTicket ? (
                <Box mt={3}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 1 }}>AI Ticket Summary</Typography>
                  <TextField
                    fullWidth
                    multiline
                    rows={10}
                    variant="outlined"
                    value={activeTicket.messages[0]}
                    margin="normal"
                  />
                  
                  <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 1 }}>AI Suggested Technical Solution</Typography>
                  <TextField
                    fullWidth
                    multiline
                    rows={10}
                    variant="outlined"
                    value={activeTicket.messages[1]}
                    margin="normal"
                  />
                  
                  <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 1 }}>AI Personalization Suggestions</Typography>
                  <TextField
                    fullWidth
                    multiline
                    rows={10}
                    variant="outlined"
                    value={activeTicket.messages[2]}
                    margin="normal"
                  />
                  <Box mt={3} display="flex" justifyContent="space-between">
                    <IconButton variant="contained" color="primary" style={{ marginRight: '10px' }}>
                      <CloseIcon />
                      Close Ticket
                    </IconButton>
                    <IconButton variant="contained" color="secondary">
                      <ContactMailIcon />
                      Contact Customer
                    </IconButton>
                  </Box>
                </Box>                        
              ) : (
                <Box mt={3}>
                  <Typography sx={{ fontWeight: 500 }}>Select a ticket to view details</Typography>
                </Box>
              )}
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, color: 'text.secondary' }}>
              <Typography variant="h6" sx={{ mt: 3, fontWeight: 600 }}>Open Tickets</Typography>
              <Box mt={3}>
                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                  {tickets.map((ticket) => (
                    <ListItem button key={ticket.id} onClick={() => handleTicketClick(ticket.id)}>
                      <ListItemText primary={ticket.name} sx={{ fontWeight: 500 }}/>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
  
};

export default App;
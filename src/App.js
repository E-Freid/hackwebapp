import React, { useState } from 'react';
import { Button, AppBar, Toolbar, Typography, Box, Grid, TextField, Card, CardContent, CardActionArea } from '@mui/material';
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
            <Card sx={{ p: 3, color: 'text.secondary' }}>
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
                    <Button variant="contained" color="primary" style={{ marginRight: '10px' }} startIcon={<CloseIcon />}>
                      Close Ticket
                    </Button>
                    <Button variant="contained" color="secondary" startIcon={<ContactMailIcon />}>
                      Contact Customer
                    </Button>
                  </Box>
                </Box>                        
              ) : (
                <Box mt={3}>
                  <Typography sx={{ fontWeight: 500 }}>Select a ticket to view details</Typography>
                </Box>
              )}
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3, color: 'text.secondary' }}>
              <Typography variant="h6" sx={{ mt: 3, fontWeight: 600 }}>Open Tickets</Typography>
              <Box mt={3}>
                {tickets.map((ticket) => (
                  <Card sx={{ mb: 2 }} key={ticket.id} onClick={() => handleTicketClick(ticket.id)}>
                    <CardActionArea>
                      <CardContent>
                        <Typography variant="h6" sx={{ fontWeight: 500 }}>{ticket.name}</Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                ))}
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
  
};

export default App;
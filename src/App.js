import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Grid, TextField, Paper, List, ListItem, ListItemText } from '@mui/material';

const tickets = [
  { id: 1, name: 'Emily Davis' },
  { id: 2, name: 'Robert Thompson' },
  { id: 3, name: 'Mark Wilson' },
  { id: 4, name: 'Eli Freid' },
  { id: 5, name: 'Dmitry Simon' },
  { id: 6, name: 'Omer Mualem' },
  { id: 7, name: 'Revital mutuko' },
];

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
    <Box>
      <AppBar position="static" sx={{ mb: 4 }}>
        <Toolbar>
          <Typography variant="h6">Customer Support Dashboard</Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2, color: 'text.secondary' }}>
            <Typography variant="h6">Ticket Details</Typography>
            {activeTicket ? (
              <Box mt={2}>
                <Typography variant="subtitle1">AI Ticket Summary</Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={10}
                  variant="outlined"
                  value={activeTicket.messages[0]}
                  margin="normal"
                />
                
                <Typography variant="subtitle1">AI Suggested Technical Solution</Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={10}
                  variant="outlined"
                  value={activeTicket.messages[1]}
                  margin="normal"
                />
                
                <Typography variant="subtitle1">AI Personalization Suggestions</Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={10}
                  variant="outlined"
                  value={activeTicket.messages[2]}
                  margin="normal"
                />
              </Box>                        
            ) : (
              <Box mt={2}>
                <Typography>Select a ticket to view details</Typography>
              </Box>
            )}
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, color: 'text.secondary' }}>
            <Typography variant="h6">Tickets</Typography>
            <Box mt={2}>
              <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {tickets.map((ticket) => (
                  <ListItem button key={ticket.id} onClick={() => handleTicketClick(ticket.id)}>
                    <ListItemText primary={ticket.name} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
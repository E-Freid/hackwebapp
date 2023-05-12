import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Grid, TextField, Paper, List, ListItem, ListItemText } from '@mui/material';

const message1a = "- Customer Profile: Emily Davis, a 30-year-old software engineer from San Francisco, CA. She owns an iPhone 13 and MacBook Pro. Her preferred method of communication is email.\n- Technical issue: Unable to transfer money from her XYZ Bank account to another bank; the error message is 'Transfer Failed. Try again later.'\n- Troubleshooting steps attempted:\n  1. Checked if the bank account has sufficient balance for the transfer.\n  2. Attempted to clear the browser cache and use a different browser.\n  3. Attempted to transfer a smaller amount.\n- Issue not resolved: Emily was unable to make the transfer despite trying these steps, and requested to speak with a live agent.\n- Preferred method of contact: Email (emily.davis@example.com).\n"
const message1b = "Emily is unable to transfer money from her XYZ Bank account to another bank. Given the steps already tried and common issues faced by other users, you might want to consider:\n\n   a. **System issues:** There could be a system-wide issue affecting bank transfers. Check with your technical team if there are any ongoing issues.\n\n   b. **Account restrictions:** Emily's account may have restrictions that are preventing the transfer. You may need to verify her account details and check for any such restrictions.\n\n   c. **Transfer limit:** Banks often have a daily transfer limit. Verify if Emily has reached this limit.\n\n   d. **Recipient account details:** The issue could lie with the recipient's bank or account. Ask Emily for more details about the recipient's account."
const message1c = "Given Emily's profile, she's a 30-year-old software engineer who is technically proficient. However, she has shown frustration during the conversation. Here's how you might interact with her:\n\n   a. **Empathy:** Acknowledge Emily's frustration at the start of the conversation. Assure her that you're there to help and will do your best to resolve the issue quickly.\n\n   b. **Clarity:** As a software engineer, Emily will appreciate clear, concise information. Make sure to explain the potential reasons for the issue and the steps you're taking to resolve it.\n\n   c. **Expertise:** Show your understanding and competence in dealing with such issues. This will help build Emily's confidence in your ability to resolve the issue.\n\n   d. **Efficiency:** Try to resolve the issue in the shortest possible time. If it will take longer, inform her of the expected wait time.\n\nRemember to maintain a professional and understanding approach throughout the interaction, ensuring that Emily feels her concerns are being addressed seriously and promptly."
const message2a = "- Customer Profile: Robert Thompson, a 72-year-old retiree from Miami, FL. He owns an iPhone 8 and an iPad. His preferred method of communication is a phone call.\n- Technical issue: Unable to download an app on the iPad; the error message is 'Cannot Download.'\n- Troubleshooting steps attempted:\n  1. Confirmed that the iPad is connected to the internet.\n  2. Attempted to restart the iPad.\n- Issue not resolved: Robert had difficulty checking the storage on his iPad, indicating a potential struggle with following technical instructions.\n- Preferred method of contact: Phone call ((123) 456-7890)."
const message2b = "Robert's problem seems to be related to downloading an app on his iPad. Given the steps already tried and the common issues faced by other users, you may want to consider the following:\n\n   a. **Storage issues:** Guide Robert to check the storage on his iPad. The inability to download could be due to insufficient storage space. \n\n   b. **Apple ID and App Store:** It's also possible that there could be an issue with his Apple ID or the App Store. You could guide him to sign out and sign back into his Apple ID, or reset the App Store cache.\n\n   c. **Software update:** If the app requires a more recent version of iOS than Robert currently has, he may need to update his software. Guide him through checking for updates."
const message2c = "Given Robert's profile, he is 72 and not comfortable with technology. Here's how you might interact with him:\n\n   a. **Patience:** Be patient and understanding. Robert may take longer to perform tasks or understand instructions. \n\n   b. **Simple language:** Use simple, non-technical language as much as possible. Avoid jargon and explain the steps in a way that's easy for him to understand.\n\n   c. **Step-by-step instructions:** Offer step-by-step guidance for each solution, and ensure Robert is comfortable and able to follow each step before moving on.\n\n   d. **Reassurance:** Reassure Robert that it's okay to not understand everything right away and that you're there to help. This will help him feel more comfortable.\n\n   e. **Empathy:** Recognize his frustration and ensure you are providing emotional support along with technical assistance. \n\nRemember to maintain a friendly and patient demeanor throughout the interaction, ensuring that Robert feels supported and guided at every step."
const message3a = "- Customer Profile: Mark Wilson, a 45-year-old business owner from Boston, MA. He owns a Windows 11 desktop and a Samsung Galaxy S21. His preferred method of communication is a phone call.\n- Technical issue: General slowness on the Windows 11 desktop.\n- Troubleshooting steps attempted:\n  1. Checked if the system needs any updates.\n  2. Attempted to run a disk cleanup.\n- Issue not resolved: Mark grew frustrated with the basic troubleshooting steps and requested to speak with a live agent.\n- Preferred method of contact: Phone call ((123) 456-7890)."
const message3b = "Mark is experiencing general slowness with his Windows 11 desktop. Given the steps already attempted and the common issues faced by other users, you might want to consider:\n\n   a. **Hardware issues:** Check if there are any hardware issues such as insufficient RAM or an overworked CPU which could be causing the slowdown. \n\n   b. **Malware:** The computer could be infected with malware. Guide Mark through running a full system scan with a reliable anti-virus software.\n\n   c. **Background processes:** There could be many background processes running that are consuming system resources. Guide Mark through the Task Manager to identify and close unnecessary processes.\n\n   d. **Software conflicts:** There could be software conflicts. Ask Mark about recently installed software or updates, and consider a system restore if needed."
const message3c = "Given Mark's profile, he is a 45-year-old business owner who is well-versed with technology. However, he has shown frustration during the conversation. Here's how you might interact with him:\n\n   a. **Empathy:** Acknowledge his frustration right away. Start the conversation by understanding his pain point and assuring him that you are there to help.\n\n   b. **Efficiency:** As a business owner, Mark likely values his time. Try to find the quickest solution to his problem. If it seems like it may take longer, inform him about the expected duration.\n\n   c. **Expertise:** As Mark is tech-savvy, ensure to display your technical knowledge and expertise. This will build his confidence in your ability to solve the issue.\n\n   d. **Skip basics:** Since Mark has already tried the basic troubleshooting steps, it's best to move to more advanced potential solutions straight away.\n\nRemember to maintain a professional and understanding approach throughout the interaction, ensuring Mark feels his concerns are being addressed seriously and promptly."


const tickets = [
  {
    id: 1,
    name: 'Emily Davis',
    messages: [message1a, message1b, message1c],
  },
  {
    id: 2,
    name: 'Robert Thompson',
    messages: [message2a, message2b, message2c],
  },
  {
    id: 3,
    name: 'Mark Wilson',
    messages: [message3a, message3b, message3c],
  },
  {
    id: 4,
    name: 'Eli Freid',
    messages: ['message4a', 'message4b', 'message4c'],
  },
  {
    id: 5,
    name: 'Dmitry Simon',
    messages: ['message5a', 'message5b', 'message5c'],
  },
  {
    id: 6,
    name: 'Omer Mualem',
    messages: ['message6a', 'message6b', 'message6c'],
  },
  {
    id: 7,
    name: 'Revital mutuko',
    messages: ['message7a', 'message7b', 'message7c'],
  },
];

function App() {
  const [activeTicket, setActiveTicket] = useState(null);

  const handleTicketClick = (ticket) => {
    setActiveTicket(ticket);
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
                  <ListItem button key={ticket.id} onClick={() => handleTicketClick(ticket)}>
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
}

export default App;

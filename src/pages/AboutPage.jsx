import React from 'react';
import { Typography, Box, List, ListItem, ListItemIcon, ListItemText, Paper, Link } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import InfoIcon from '@mui/icons-material/Info';

import GitHubIcon from '@mui/icons-material/GitHub'; 

const AboutPage = () => {
  const githubRepoUrl = "https://github.com/adiTyaIcHe07"; 

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        About This App
      </Typography>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="body1" paragraph>
          This Loan Calculator App is a modern, single-page web application built using **React JS** and **Material UI**. It allows users to calculate loan EMIs (Equated Monthly Installments), view a detailed amortization schedule, and see real-time currency conversions of their EMI using live exchange rates.
        </Typography>
      </Paper>

       {}
       <Paper sx={{ p: 3, mb: 3 }}>
         <Typography variant="h5" component="h2" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
            <InfoIcon sx={{ mr: 1 }} color="primary"/> Instructions for Candidates
         </Typography>
          <Typography variant="body2" color="textSecondary" paragraph>
            Please follow these instructions to complete and submit your project:
          </Typography>
          <List dense>
             <ListItem>
                <ListItemIcon><CheckCircleOutlineIcon color="success" /></ListItemIcon>
                <ListItemText primary="Push the entire project to a public GitHub repository." />
             </ListItem>
             <ListItem>
                 <ListItemIcon><CheckCircleOutlineIcon color="success" /></ListItemIcon>
                <ListItemText primary="Make sure to commit regularly with clear messages after completing each feature." />
             </ListItem>
             <ListItem>
                 <ListItemIcon><CheckCircleOutlineIcon color="success" /></ListItemIcon>
                <ListItemText primary="Use the provided EMI formula to perform calculations." />
             </ListItem>
             <ListItem>
                 <ListItemIcon><CheckCircleOutlineIcon color="success" /></ListItemIcon>
                <ListItemText primary="Use Context API for global state management (e.g., theme, currency)." />
             </ListItem>
             <ListItem>
                 <ListItemIcon><CheckCircleOutlineIcon color="success" /></ListItemIcon>
                <ListItemText primary="Create custom React Hooks for reusable logic (e.g. EMI calculation, fetching exchange rates)." />
             </ListItem>
             <ListItem>
                 <ListItemIcon><CheckCircleOutlineIcon color="success" /></ListItemIcon>
                <ListItemText primary="Integrate the ExchangeRate-API (or similar) for live currency conversion." />
             </ListItem>
              <ListItem>
                 <ListItemIcon><CheckCircleOutlineIcon color="success" /></ListItemIcon>
                <ListItemText primary="Ensure the app is fully responsive on all screen sizes." />
             </ListItem>
             <ListItem>
                 <ListItemIcon><CheckCircleOutlineIcon color="success" /></ListItemIcon>
                <ListItemText primary="Implement both light and dark modes using Material UI's theming system." />
             </ListItem>
              <ListItem>
                 <ListItemIcon><CheckCircleOutlineIcon color="success" /></ListItemIcon>
                <ListItemText primary="Add a 404 Not Found page for unmatched routes." />
             </ListItem>
             <ListItem>
                 <ListItemIcon><CheckCircleOutlineIcon color="success" /></ListItemIcon>
                <ListItemText primary="Handle runtime errors gracefully by showing an Error Page." />
             </ListItem>
             <ListItem>
                 <ListItemIcon><CheckCircleOutlineIcon color="success" /></ListItemIcon>
                <ListItemText primary="Once deployed, add the live deployment link in the About section of your GitHub repo." />
             </ListItem>
             <ListItem>
                 <ListItemIcon><CheckCircleOutlineIcon color="success" /></ListItemIcon>
                <ListItemText primary="Deploy the project on any platform (e.g. Vercel, Netlify, GitHub Pages)." />
             </ListItem>
             <ListItem>
                 <ListItemIcon><CheckCircleOutlineIcon color="success" /></ListItemIcon>
                <ListItemText primary="Your final GitHub repository should include a live demo link, and your code should be readable, modular, and well-structured." />
             </ListItem>
          </List>
       </Paper>


      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Features
        </Typography>
        <List dense>
          <ListItem>
            <ListItemIcon> <CheckCircleOutlineIcon fontSize="small" /> </ListItemIcon>
            <ListItemText primary="Loan EMI calculation using standard financial formulas" />
          </ListItem>
          <ListItem>
             <ListItemIcon> <CheckCircleOutlineIcon fontSize="small" /> </ListItemIcon>
             <ListItemText primary="Dynamic amortization schedule table with monthly breakdown" />
          </ListItem>
          <ListItem>
            <ListItemIcon> <CheckCircleOutlineIcon fontSize="small" /> </ListItemIcon>
            <ListItemText primary="Real-time currency conversion of EMI using a live exchange rate API" />
          </ListItem>
          <ListItem>
             <ListItemIcon> <CheckCircleOutlineIcon fontSize="small" /> </ListItemIcon>
            <ListItemText primary="Support for Light and Dark themes" />
          </ListItem>
           <ListItem>
             <ListItemIcon> <CheckCircleOutlineIcon fontSize="small" /> </ListItemIcon>
            <ListItemText primary="Responsive design for various screen sizes" />
          </ListItem>
           <ListItem>
             <ListItemIcon> <CheckCircleOutlineIcon fontSize="small" /> </ListItemIcon>
            <ListItemText primary="Clear navigation and user-friendly interface" />
          </ListItem>
           <ListItem>
             <ListItemIcon> <CheckCircleOutlineIcon fontSize="small" /> </ListItemIcon>
            <ListItemText primary="Error handling for API calls and calculations" />
          </ListItem>
           <ListItem>
             <ListItemIcon> <CheckCircleOutlineIcon fontSize="small" /> </ListItemIcon>
            <ListItemText primary="Dedicated 404 and Error pages" />
          </ListItem>
        </List>
      </Paper>

      {}
       <Paper sx={{ p: 3, mb: 3 }}>
         <Typography variant="h6" component="h3" gutterBottom>
            Project Repository
         </Typography>
         <Link href={githubRepoUrl} target="_blank" rel="noopener noreferrer" sx={{ display: 'flex', alignItems: 'center' }}>
            <GitHubIcon sx={{ mr: 1 }} /> View on GitHub
         </Link>
         <Typography variant="body2" color="text.secondary" sx={{mt: 1}}>
            (Remember to add the live deployment link here and in your GitHub repo's description/website field!)
         </Typography>
       </Paper>

    </Box>
  );
};

export default AboutPage;
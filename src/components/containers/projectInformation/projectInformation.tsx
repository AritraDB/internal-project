import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// import logo from "../../../../../internal-app/resources/images/monkey_logo.jpg";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ProjectDetails from '../../subSections/projectDetails/projectDetails';
import ProjectSheet from '../../subSections/projectSheet/projectSheet';

const mdTheme = createTheme();

export default function ProjectInformation() {
  const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel: any) => (event: any, isExpanded: any) => {
    setExpanded(isExpanded ? panel : '');
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        {/* <CssBaseline /> */}

        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={12}>
                <Accordion
                  expanded={expanded === 'panel1'}
                  onChange={handleChange('panel1')}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                      Project Sheet
                    </Typography>
                    {/* <Typography sx={{ color: "text.secondary" }}>
                      I am an accordion
                    </Typography> */}
                  </AccordionSummary>
                  <AccordionDetails>
                    <ProjectSheet />
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === 'panel2'}
                  onChange={handleChange('panel2')}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                      Project Details
                    </Typography>
                    {/* <Typography sx={{ color: "text.secondary" }}>
                      You are currently not an owner
                    </Typography> */}
                  </AccordionSummary>
                  <AccordionDetails>
                    <ProjectDetails />
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </Grid>
            {/* <Copyright sx={{ pt: 4 }} /> */}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

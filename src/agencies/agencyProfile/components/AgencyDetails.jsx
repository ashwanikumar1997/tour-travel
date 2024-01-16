import React, { useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material';
import AgencyData from './ViewAgencyData/index.jsx'






function AgencyDetails() {
    const [expanded, setExpanded] = useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <>
      <Accordion style={{backgroundColor:"lightgrey"}}>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography >Agency Details</Typography>
         
        </AccordionSummary>
        <hr/>
        <AccordionDetails>
          <Typography>
           <AgencyData/>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default AgencyDetails;

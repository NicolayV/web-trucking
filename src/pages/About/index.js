import React from "react";
import Grid from "@mui/material/Grid";

import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";

const About = () => (
  <Grid item xs={8}>
    <Badge badgeContent={4} color="primary">
      <MailIcon color="action" />
    </Badge>
  </Grid>
);

export default About;

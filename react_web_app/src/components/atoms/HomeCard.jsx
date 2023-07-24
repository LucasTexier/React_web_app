import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import logo from "../../assets/logo/logo.png";
import "../../assets/scss/homeCard.scss";

// Home main component with a brief presentation of fcgb

export default function HomeCard() {
  return (
    <Card className="card" sx={{ maxWidth: 600 }}>
      <CardMedia sx={{ height: 140 }} image={logo} title="Bordeaux" />
      <CardContent>
        <Typography
          gutterBottom
          variant="h2"
          textAlign="center"
          component="div"
        >
          FCGB
        </Typography>
        <Typography variant="body" color="text.secondary">
          A flagship club in French soccer, the Girondins have won 6 French
          Championship titles (1950, 1984, 1985, 1987, 1999 and 2009), 4 French
          Cups (1941, 1986, 1987 and 2013), 3 League Cups (2002, 2007 and 2009),
          3 Champions Trophies (1986, 2008 and 2009) and 2 Gambardella Cups
          (1976 and 2013). The club of Alain Giresse or Zinedine Zidane,
          Bordeaux has written some of the finest pages in the history of French
          clubs in the European Cup, with two appearances in the semi-finals of
          the C1 (1985) and C2 (1987), a C3 final in 1996 and a Champions League
          quarter-final (2010).
        </Typography>
      </CardContent>
      <CardActions>
        <Tooltip title="Click to go to official website" arrow>
          <a href="https://www.girondins.com/fr" target="_blank">
            <Button size="small">Learn More</Button>
          </a>
        </Tooltip>
      </CardActions>
    </Card>
  );
}

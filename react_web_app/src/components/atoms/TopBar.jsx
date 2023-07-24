import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";

export default function TopBar() {
  return (
    <Box sx={{ flexGrow: 2 }}>
      <AppBar>
        <Toolbar sx={{ color: "white", backgroundColor: "darkblue" }}>
          <IconButton size="xl" color="inherit" sx={{ mr: "35%" }}>
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Football Club des Girondins de Bordeaux
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

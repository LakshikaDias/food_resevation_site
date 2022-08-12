import React, { useState } from "react";

import {
  AppBar,
  Button,
  Icon,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const pages = ["Customer", "Cook", "Manager"];

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    // console.log(event.currentTarget);
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
      <AppBar>
        <Container>
          <Toolbar disableGutters>
            <IconButton
              size="large"
              color="inherit"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, id) => {
                return (
                  <MenuItem key={id} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                );
              })}
            </Menu>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page, id) => {
                return (
                  <Button key={id} sx={{ color: "white", display: "block" }}>
                    <Typography textAlign="center">{page}</Typography>
                  </Button>
                );
              })}
            </Box>
            <Box>
              <Button
                sx={{ color: "white", display: { xs: "none", md: "flex" } }}
              >
                <Typography> LogIn / SignUp</Typography>
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;

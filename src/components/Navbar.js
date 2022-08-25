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
import { Link } from "react-router-dom";

const Navbar = () => {
  const pages = [
    { page: "Customer", pageurl: "/Customer" },
    { page: "Chef", pageurl: "/Chef" },
    { page: "Manager", pageurl: "/Manager" },
  ];

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
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
            {/* Start menu Button */}
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
              {pages.map((pages, id) => {
                return (
                  <MenuItem key={id} onClick={handleCloseNavMenu}>
                    <Link to={pages.pageurl}>
                      <Typography textAlign="center">{pages.page}</Typography>
                    </Link>
                  </MenuItem>
                );
              })}
            </Menu>
            {/* End menu button */}

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((pages, id) => {
                return (
                  <Button key={id} sx={{ color: "white", display: "block" }}>
                    <Link to={pages.pageurl}>
                      <Typography textAlign="center">{pages.page}</Typography>
                    </Link>
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

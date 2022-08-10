import React from "react";

import { AppBar } from "@mui/material";
import { Box, Container } from "@mui/system";
import Button from "@mui/material/Button";

const Navbar = () => {
  const pages = ["Customer", "Cook", "Manager"];

  return (
    <div>
      <AppBar>
        <Container>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((pages, id) => {
              return (
                <Button
                  key={id}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {pages}
                </Button>
              );
            })}

            <Button>LogIn/SignUp</Button>
          </Box>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;

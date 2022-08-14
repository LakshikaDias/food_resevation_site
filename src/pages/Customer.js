import { Container } from "@mui/material";
import React from "react";
import BannerCard from "../components/BannerCard";

import Navbar from "../components/Navbar";

const Customer = () => {
  return (
    <div>
      <Container>
        <Navbar />
        <BannerCard />
      </Container>
    </div>
  );
};

export default Customer;

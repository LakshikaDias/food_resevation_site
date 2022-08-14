import { Container } from "@mui/material";
import React from "react";
import BannerCard from "../components/BannerCard";
import FoodCard from "../components/FoodCard";

import Navbar from "../components/Navbar";

const Customer = () => {
  return (
    <div>
      <Container>
        <Navbar />
        <br />
        <br />
        <br />
        <BannerCard />
        <br />
        <FoodCard />
      </Container>
    </div>
  );
};

export default Customer;

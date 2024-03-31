import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless delivery"
        backgroundImage="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtntext="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless delivery"
        backgroundImage="model-y.jpg"
        leftBtnText="Custom Order"
        rightBtntext="Existing Inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless delivery"
        backgroundImage="model-3.jpg"
        leftBtnText="Custom Order"
        rightBtntext="Existing Inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless delivery"
        backgroundImage="model-x.jpg"
        leftBtnText="Custom Order"
        rightBtntext="Existing Inventory"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-Back Guarantee"
        backgroundImage="solar-panel.jpg"
        leftBtnText="Custom Order"
        rightBtntext="Existing Inventory"
      />
      <Section
        title="Solar for New Roof"
        description="Solar Roof Costs Less than a New Roof"
        backgroundImage="solar-roof.jpg"
        leftBtnText="Custom Order"
        rightBtntext="Existing Inventory"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImage="accessories.jpg"
        leftBtnText="Shop Now"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;

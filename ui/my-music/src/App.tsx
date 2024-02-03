import React from "react";
import styled from "styled-components";
import backgroundImage from "./imgs/bg.jpg";
import Header from "./components/Header";
import StyledTable from "./components/Listing";

const PageContainer = styled.div`
  height: 100vh; // 100% of the viewport height
  width: 100vw; // 100% of the viewport width
  background-image: url(${backgroundImage});
  background-size: cover; // Cover the entire container
  background-position: center; // Center the image
  display: flex;
  justify-content: center;
  align-items: center;
  color: white; // Adjust text color for better visibility
`;

const PageContent = styled.div`
  // Additional styles for your content
`;

const YourComponent = () => {
  return (
    <PageContainer>
      <PageContent>
        <Header />
        <StyledTable />
      </PageContent>
    </PageContainer>
  );
};

export default YourComponent;

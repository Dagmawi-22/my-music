import React, { useState } from "react";
import styled from "styled-components";
import backgroundImage from "./imgs/bg.jpg";
import Header from "./components/Header";
import StyledTable from "./components/Listing";
import Statistics from "./components/Stat";
import Modal from "./components/Modal";

const PageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 5px;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden; /* Prevent horizontal scrolling */
`;

const PageContent = styled.div`
  padding: 20px 30px;
`;

const App = () => {
  const [editSong, setEditSong] = useState<boolean>(false);
  const [deleteSong, setDeleteSong] = useState<boolean>(false);

  return (
    <PageContainer>
      <PageContent>
        <Statistics />
        <Header title="My Songs" onAddClick={() => alert("adding")} />
        <StyledTable />
      </PageContent>
    </PageContainer>
  );
};

export default App;

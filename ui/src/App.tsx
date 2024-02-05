import React, { useState } from "react";
import Header from "./components/Header";
import StyledTable from "./components/Listing";
import Statistics from "./components/Stat";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { IndexPageContainer, IndexPageContent } from "./styles/styled";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <IndexPageContainer>
          <IndexPageContent>
            <Statistics />
            <Header title="My Songs" onAddClick={() => alert("adding")} />
            <StyledTable />
          </IndexPageContent>
        </IndexPageContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;

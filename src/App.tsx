import React from 'react';
import {Provider} from "react-redux"
import {store} from "./state"
import RepositoriesList from "./RepositoriesList";

import './App.css';

function App() {
  return (
      <Provider store ={store}>
        <div className="search-container">
          <h1>Search for a Package</h1>
          <RepositoriesList />
        </div>
      </Provider>
  
  );
}

export default App;

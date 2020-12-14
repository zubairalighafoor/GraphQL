import React from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/client';
import client from './config/gql_config';
import Employees from './Components/Employees';




function App() {
  

  return (
    <ApolloProvider client={client}>
      <div>
        <h2>My first Apollo app 🚀</h2>
        <Employees/>
      </div>
    </ApolloProvider>
  );
}

export default App;

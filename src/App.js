import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './components/container/BurgerBuilder'

function App() {
  return (
    <div >
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;

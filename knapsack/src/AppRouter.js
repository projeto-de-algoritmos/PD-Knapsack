import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import MostraItens from './MostraItens';


const AppRouter = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/mostra-itens" element={<MostraItens />} />
        </Routes>
      </Router>
    );
  };
  
  export default AppRouter;
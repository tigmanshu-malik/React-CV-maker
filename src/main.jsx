import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header';
import Inputs from './inputs';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <div style={{ display: 'flex' }}>
      <Inputs />
    </div>
  </React.StrictMode>,
);

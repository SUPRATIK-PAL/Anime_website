import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './GlobalStyle';
import GlobalContextProvider from  "./Context/global.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GlobalContextProvider>
      <GlobalStyle/>
      <App />
    </GlobalContextProvider>
);

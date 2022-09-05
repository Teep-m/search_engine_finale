import React from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import { ResultContextProvider } from './contexts/ResultContextProvider';
import './global.css';

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <ResultContextProvider>
    <Router>
      <App />
    </Router>
  </ResultContextProvider>
);

// ReactDom.render(
//   <ResultContextProvider>
//     <Router>
//       <App />
//     </Router>
//   </ResultContextProvider>,
//   document.getElementById('root')
// );
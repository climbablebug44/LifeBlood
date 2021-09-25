import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GoogleMaps from './Component/Feed/Maps/GoogleMap';

ReactDOM.render(
  <React.StrictMode>
   <GoogleMaps/>
   {/*<App/>*/}
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();

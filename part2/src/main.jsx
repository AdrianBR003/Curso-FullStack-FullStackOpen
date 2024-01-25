import ReactDOM from 'react';
import  React from 'react'; 
import App from './App.jsx'
import axios from 'axios'

axios.get('http://localhost:3001/notes').then(response => {
const notes = response.data
ReactDOM.createRoot(
  document.getElementById("root"),
)
.render(
  <React.StrictMode>
    <App  notes={notes}/>
  </React.StrictMode>,
);
})
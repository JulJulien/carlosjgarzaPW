import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Intro from './components/Intro';
import NavBar from './components/NavBar';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch data from the backend
    axios.get('http://localhost:5000/api')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div>
      <NavBar/>
      <Intro />
      <About />
      <h1>{message}</h1>
    </div>
  );
}

export default App;

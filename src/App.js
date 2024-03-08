import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css';
import Tasks from './Tasks';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <div className="container d-flex justify-content-center align-items-center">
        <Tasks />
      </div>
      <Footer />
    </div>
  );
}

export default App;

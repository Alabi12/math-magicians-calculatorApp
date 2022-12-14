import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <div className="row">
          <nav className="navbar">
            <h1 className="text">Math Magicians</h1>
            <ul>
              <li>
                <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/calculator"
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  Calculator
                </Link>
              </li>
              <li>
                <Link
                  to="/quote"
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  Quote
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </>
    );
  }
}

export default App;

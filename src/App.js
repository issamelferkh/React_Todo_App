import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

// // default function
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// // with function
// function App() {
//   return (
//     <div className="App">
//       <h1>Hi I'm a react App</h1>
//       <p>This is working</p>
//     </div>
//   );
// }

// with class
class App extends Component {
  render () {
    return (
      <div className="App">
        <h1>Hi I'm a react App</h1>
        <p>This is working</p>
        <Person />
      </div>
    );
  }
  // return React.createElement('div', {className:"App"}, 
  // React.createElement('h1', null, 'Hi I\'m a react App'));
}

export default App;

import {BrowserRouter, Route, Link} from 'react-router-dom'

import Home from './components/Home'
import Contact from './components/Contact'
import Procedures from './components/Procedures'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact component={Home}/>
        <Route path="/Contact" component={Contact}/>           
        <Route path="/Procedures" component={Procedures}/>
      </div>
    </BrowserRouter>
  );
}
export default App;

import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Costumers from './views/Costumers';
import Home from './views/Home';

import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/costumers" exact component={Costumers} />
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;

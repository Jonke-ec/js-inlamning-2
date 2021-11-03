import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Costumers from './views/Costumers';
import Home from './views/Home';

import MyCard from './components/MyCard';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <MyCard name="Juni Ida Linéa Askling" email="juni.askling@gmail.com" message="Världens bästa bebis." />
      <Switch>
        <Route path="/costumers" exact component={Costumers} />
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;

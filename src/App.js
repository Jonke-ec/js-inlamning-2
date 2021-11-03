import './App.css';
import MyCard from './components/MyCard';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MyCard name="Juni Ida Linéa Askling" email="juni.askling@gmail.com" message="Världens bästa bebis." />
    </div>
  );
}

export default App;

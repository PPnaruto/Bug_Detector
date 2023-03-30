import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import Navbar1 from './Components/Navbar/Navbar1';
import AllRoute from './Routes/AllRoute';

function App() {
  return (
    <div className="App">
      <Navbar1/>
      <AllRoute/>
    </div>
  );
}

export default App;

import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import { Menu } from './core/Menu/Menu';
import { Navbar } from './core/Navbar/Navbar';
import { Routes } from './core/Routes/Routes';

function App() {
  return (
    <Router>
    
       <Menu/>
       
       <div className="fluid">
         <Routes/>
       </div>

       {/* <Navbar/> */}
    
    
    </Router>
  );
}

export default App;

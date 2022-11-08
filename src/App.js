
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Fooditem from './component/fooditem/fooditem';
// import Fooditem from './component/fooditem/fooditem';

// import Login from './component/Login/Login';
import Navbar from './component/Navbar/Navbar';
// import Fooditem from './component/pages/fooditem/fooditem';


// import Navbar from './component/Navbar/Navbar';
// import Home from './component/Pages/Home/Home';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Fooditem/>
     
    


    </div>
  );
}

export default App;

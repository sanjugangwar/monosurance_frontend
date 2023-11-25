import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Login from './components/shared/Login';
import Admin from './components/admin/Admin';
import Agent from './components/agent/Agent';
import Contact from './components/shared/Contact';
import About from './components/shared/About';
import Customer from './components/customer/Customer';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home></Home>}></Route>
        <Route exact path='/login' element={<Login></Login>}></Route>
        <Route exact path='/admin' element={<Admin></Admin>}></Route>
        <Route exact path='/customer' element={<Customer></Customer>}></Route>
        <Route exact path='/agent' element={<Agent></Agent>}></Route>
        <Route exact path='/contact' element={<Contact></Contact>}></Route>
        <Route exact path='/about' element={<About></About>}></Route>
      </Routes>
      {/* <Home></Home> */}
    </div>
  );
}

export default App;

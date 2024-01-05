import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Login from './components/shared/Login';
import Admin from './components/admin/Admin';
import Agent from './components/agent/Agent';
import Contact from './components/shared/Contact';
import About from './components/shared/About';
import Customer from './components/customer/Customer';
import Employee from './components/employee/Employee'
import AllEmployee from './components/admin/AllEmployee';
import AllPlans from './components/admin/AllPlans';
import AllAgents from './components/agent/AllAgents';
import Schemes from './components/admin/Schemes';
import AgentProfile from './components/agent/AgentProfile';
import AddCustomer from './components/agent/AddCustomer';
import CustomerProfile from './components/customer/CustomerProfile';
import EmployeeProfile from './components/employee/EmployeeProfile';
import Plans from './components/plan/Plans';
import Query from './components/customer/Query';
import EmployeeQueries from './components/employee/EmployeeQueries';
import PolicyView from './components/policy/PolicyView';
import ApproveDocs from './components/employee/ApproveDocs';
import InsuranceAccounts from './components/employee/InsuranceAccounts';
import AgentCommission from './components/agent/AgentCommission';
import ApproveClams from './components/admin/ApproveClams';
import Marketting from './components/agent/Marketting';
import GetAllCustomers from './components/customer/GetAllCustomers';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home></Home>}></Route>
        <Route exact path='/login' element={<Login></Login>}></Route>
        <Route exact path='/admin' element={<Admin></Admin>}></Route>
        <Route exact path='/employee' element={<Employee></Employee>}></Route>
        <Route exact path='/customer' element={<Customer></Customer>}></Route>
        <Route exact path='/agent' element={<Agent></Agent>}></Route>
        <Route exact path='/allEmployee' element={<AllEmployee></AllEmployee>}></Route>
        <Route exact path='/allPlans' element={<AllPlans></AllPlans>}></Route>
        <Route exact path='/allAgents' element={<AllAgents></AllAgents>}></Route>
        <Route exact path='/contact' element={<Contact></Contact>}></Route>
        <Route exact path='/about' element={<About></About>}></Route>
        <Route exact path='/schemes' element={<Schemes></Schemes>}></Route>
        <Route exact path='/agentProfile' element={<AgentProfile></AgentProfile>}></Route>
        <Route exact path='/agent/addCustomer' element={<AddCustomer/>}></Route>
        <Route exact path='/customer/profile' element={<CustomerProfile/>}></Route>
        <Route exact path='/customer/policy' element={<PolicyView/>}></Route>
        <Route exact path='/employee/approve' element={<ApproveDocs/>}></Route>
        <Route exact path='/customer/query' element={<Query/>}></Route>
        <Route exact path='/employee/profile' element={<EmployeeProfile/>}></Route>
        <Route exact path='/employee/queries' element={<EmployeeQueries/>}></Route>
        <Route exact path='/employee/accounts' element={<InsuranceAccounts/>}></Route>
        <Route exact path='/admin/accounts' element={<InsuranceAccounts/>}></Route>
        <Route exact path='/agent/commission' element={<AgentCommission/>}></Route>
        <Route exact path='/agent/marketting' element={<Marketting/>}></Route>
        <Route exact path='/agent/customers' element={<GetAllCustomers/>}></Route>
        <Route exact path='/admin/claims' element={<ApproveClams/>}></Route>
        <Route exact path='/admin/customers' element={<GetAllCustomers/>}></Route>
        <Route exact path='/plans' element={<Plans/>}></Route>

      </Routes>
      {/* <Home></Home> */}
    </div>
  );
}

export default App;

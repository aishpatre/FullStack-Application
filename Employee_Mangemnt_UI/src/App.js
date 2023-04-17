import './App.css';
import { BrowserRouter as Router , Route ,Switch } from 'react-router-dom';
import ListEmployee from './components/ListEmployee';
import Header from './components/Header';
import Footer from './components/Footer';
import AddEmployeebtn from './components/AddEmployeebtn';

function App() {
  return (
    <div>
      <Router>
       <Header/>
       <div className="container">
        <Switch>
          <Route exact path="/" component = {ListEmployee}></Route>
          <Route path="/employees" component = {ListEmployee}></Route>
          <Route path ="/add-employee" component ={AddEmployeebtn}></Route>
          <Route path="/edit-employee/:id" component={AddEmployeebtn}></Route>
        </Switch>
    </div>
      <Footer/>
      </Router>
    </div>
  );
}


export default App;

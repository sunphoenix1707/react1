import {Route,BrowserRouter as Router,Switch} from 'react-router-dom';
import Header from "./components/header";
import AddExpense from './pages/addexpense';
import Home from "./pages/home";

function App() {
  return (
    <Router>
  
      <Header/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/add-expense'  component={AddExpense} />
      </Switch>
     
      <div>Footer</div>
  
    </Router>
  );
}

export default App;

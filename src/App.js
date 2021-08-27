import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import UsersList from './components/UsersList';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={UsersList} /> 
      </Switch>
    </div>
  );
}

export default App;

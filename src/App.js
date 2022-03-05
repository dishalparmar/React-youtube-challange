import './App.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Videos from './Videos/Videos';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import SearchPage from './SearchPage/SearchPage';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <div className='app-wrapper'>
          <Switch>
            <Route path="/search/:searchTerm">
                <Sidebar />
                <SearchPage />
            </Route>
            <Route path='/'>
                <Sidebar />
                <Videos />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

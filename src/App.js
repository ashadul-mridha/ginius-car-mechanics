import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Booking from './Components/Pages/Booking/Booking/Booking';
import Header from './Components/Shared/Header/Header';
import Login from './Components/Login/Login/Login';
import AuthProvider from './Components/context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AddService from './Components/Pages/AddService/AddService';
import ManageServices from './Components/Pages/ManageServices/ManageServices';
import UpdateService from './Components/Pages/UpdateService/UpdateService';

function App() {
  return (
    <div className="app">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/add/service">
              <AddService></AddService>
            </Route>
            <Route path="/manage/services">
              <ManageServices></ManageServices>
            </Route>
            <PrivateRoute path="/booking/:serviceID">
                <Booking></Booking>
            </PrivateRoute>
            <Route path="/update/service/:serviceID">
              <UpdateService></UpdateService>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

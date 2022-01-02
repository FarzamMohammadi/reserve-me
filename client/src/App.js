import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import NotFound from './components/NotFound/NotFound';
import { Provider } from 'react-redux';
import store from './redux/store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './redux/actions/authActions';
import PrivateRoute from './components/private-route/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar.js';
import Search from './components/Search/Search.js';
import ResetPasswordScreen from "./components/screens/ResetPasswordScreen";
import ForgotPasswordScreen from "./components/screens/ForgotPasswordScreen";
import AddService from './components/AddService/AddServiceComponent.jsx';
import BookService from "./components/BookService/BookService";
import Profile from "./components/profile/profile";


function App() {
  // Check for token to keep user logged in
  if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken;
    setAuthToken(token);
    // Decode token and get user info and exp
    const decoded = jwt_decode(token);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded)); // Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
      // Logout user
      store.dispatch(logoutUser()); // Redirect to login
      window.location.href = "./login";
    }
  }
  return (
    <Provider store={store}>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search}/>
          <Route path="/addservice" component={AddService}/>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/bookservice/:serviceName/:providerName" component={BookService} />
          <Route
            exact
            path="/forgotpassword"
            component={ForgotPasswordScreen}
          />
          <Route
            exact
            path="/passwordreset/:resetToken"
            component={ResetPasswordScreen}
          />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <Route path="*" component={NotFound} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

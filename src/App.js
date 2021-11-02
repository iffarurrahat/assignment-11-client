import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import NotFound from './component/NotFound/NotFound';
import Header from './component/CommonPage/Header/Header';
import Footer from './component/CommonPage/Footer/Footer';
import ManageAllPlace from './component/ManageAllPlace/ManageAllPlace';
import PlacesOffering from './component/PlacesOffering/PlacesOffering';
import PlacesOfferingDetails from './component/CommonPage/PlacesOfferingDetails/PlacesOfferingDetails';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import OurOrder from './component/OurOrder/OurOrder';
import AddPlace from './component/AddPlace/AddPlace';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/placesOffering">
              <PlacesOffering></PlacesOffering>
            </Route>
            <PrivateRoute exact path="/placesOfferingDetails">
              <PlacesOfferingDetails></PlacesOfferingDetails>
            </PrivateRoute>
            <Route exact path="/manageAllPlace">
              <ManageAllPlace></ManageAllPlace>
            </Route>
            <Route exact path="/ourOrder">
              <OurOrder></OurOrder>
            </Route>
            <Route exact path="/addPlace">
              <AddPlace></AddPlace>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

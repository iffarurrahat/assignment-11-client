import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AddNewPlace from './component/AddNewPlace/AddNewPlace';
import Home from './component/Home/Home';
import PlaceOrder from './component/PlaceOrder/PlaceOrder';
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
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/placesOffering">
              <PlacesOffering></PlacesOffering>
            </Route>
            <Route path="/placesOfferingDetails/:id">
              <PlacesOfferingDetails></PlacesOfferingDetails>
            </Route>
            <PrivateRoute path="/placeOrder">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path="/addNewPlace">
              <AddNewPlace></AddNewPlace>
            </Route>
            <Route path="/manageAllPlace">
              <ManageAllPlace></ManageAllPlace>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
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

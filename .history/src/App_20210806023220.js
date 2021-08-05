import logo from "./logo.svg";
import "./App.css";

// Routing components
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

//Auth componentst
import SignUp from "./components/SignUp/signup";
import Login from "./components/Login/login";

//User components
import UserNav from "./components/User/nav";
import HomeBody from "./components/User/home";
import CartBody from "./components/User/cart";

//Admin components
import AdminNav from "./components/Admin/nav";
import Orders from "./components/Admin/orders";
import Product from "./components/Admin/product";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Dashboard, Home } from "@material-ui/icons";

//TODO change primary to orange
//import { createTheme } from '@material-ui/core/styles';
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#FFA500'
//     }
//   }
// });

function App() {
  return (
    <MuiThemeProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="App">
              <AdminNav name="Instrumental Store" />
              <HomeBody />
            </div>
          </Route>

          <Route exact path="/signup">
            <div className="App">
              <AdminNav name="Instrumental Store" />
              <SignUp />
            </div>
          </Route>

          <Route exact path="/login">
            <div className="App">
              <AdminNav name="Instrumental Store" />
              <Login />
            </div>
          </Route>

          <Route exact path="/cart">
            <div className="App">
              <AdminNav name="Instrumental Store" />
              <CartBody />
            </div>
          </Route>

          <Route exact path="/admin">
            <div className="App">
              <AdminNav name="Instrumental Store" />
              <Orders />
            </div>
          </Route>

          <Route exact path="/admin/orders">
            <div className="App">
              <AdminNav name="Instrumental Store" />
              <Orders />
            </div>
          </Route>
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;

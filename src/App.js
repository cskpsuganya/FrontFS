import logo from './logo.svg';
import './App.css';

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
import Dashboard from "./components/Admin/dashboard";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

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
      <div className="App">
        <UserNav name="Instrumental Store"/>
        <Dashboard />
      </div>
    </MuiThemeProvider>
  );
}

export default App;

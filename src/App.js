import logo from './logo.svg';
import './App.css';

import SignUp from "./components/SignUp/signup";
import Login from "./components/Login/login";

import UserNav from "./components/User/nav";
import HomeBody from "./components/User/home";
import CartBody from "./components/User/cart";



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
        <UserNav/>
        <CartBody />
      </div>
    </MuiThemeProvider>
  );
}

export default App;

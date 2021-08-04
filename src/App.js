import logo from './logo.svg';
import './App.css';
import SignUp from "./components/SignUp/signup";
import UserNav from "./components/UserNav/nav";
import Login from "./components/Login/login";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

function App() {
  return (
    <MuiThemeProvider>
    <div className="App">
      <UserNav/>
      <Login />
    </div>
    </MuiThemeProvider>
  );
}

export default App;

import { Link } from 'react-router-dom';
import './App.css';
import './components/login/login'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from './components/login/login';
function App() {
  return (
    <div className='App'>
      <div className="container">
        <text>AppName</text>
      </div>

      <div className='auth-wrapper'>
        <div className="auth-inner">
          <Login></Login>
        </div>
      </div>

    </div>
  );
}

export default App;

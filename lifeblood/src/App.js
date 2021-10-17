import {BrowserRouter as Router} from 'react-router-dom';
import MapPage from './Components/Common/MapPage/MapPage';
import LoginPage from './Components/Login/LoginPage';

function App() {
  return (
    <Router>
      <LoginPage/>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router } from 'react-router-dom';
import Header from "./Components/Header/Header";
import MainSection from "./Components/HomePage/MainSection";
import MapPage from './Components/Common/MapPage/MapPage';

function App() {
  return (
    <Router>
      {/*<Header />
      <MainSection />*/}
      <MapPage/>
    </Router>
  );
}

export default App;

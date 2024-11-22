import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Route/Home';
import "./App.css"
import  "./index.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/planitrentals' element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Route/Home';
import "./App.css"
import  "./index.css"
import Category from './Route/Category';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/planitrentals' element={<Home/>}/>
        <Route path='/planitrentals/:category' element={<Category/>}/>
      </Routes>
    </Router>
  );
}

export default App;

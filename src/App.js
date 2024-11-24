import {BrowserRouter as Router,Routes,Route, Navigate} from 'react-router-dom';
import Home from './Route/Home';
import "./App.css"
import  "./index.css"
import Category from './Route/Category';
import Product from './Route/Product';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<Navigate to="/planitrentals"/>}/>
        <Route path='/planitrentals' element={<Home/>}/>
        <Route path='/planitrentals/:category' element={<Category/>}/>
        <Route path='/planitrentals/product-page/:product' element={<Product/>}/>
      </Routes>
    </Router>
  );
}

export default App;

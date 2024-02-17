import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './pages';
import { Navbar } from './pages';
import { About } from './pages';

const App = () => {
  return (
    <Router>
        <Routes>
            <Route element={<Navbar/>} path='/'>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about/:id' element={<About/>}></Route>
            </Route>
        </Routes>
    </Router>
  );
};

export default App;
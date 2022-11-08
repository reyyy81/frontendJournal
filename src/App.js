import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Routes, Route, Link} from 'react-router-dom';
import Blogs from './components/pages/Blogs';
import NewsCard from './components/pages/NewsCard';
import Navbar from './components/navbar'
import Home from './components/pages/Home';



function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path='blogs' element={<Blogs/>}></Route>
        <Route path='home' element={<Home/>}></Route>
        <Route path='news' element={<NewsCard/>}></Route>
      </Routes>
    </Router>

    </>
  );
}

export default App;

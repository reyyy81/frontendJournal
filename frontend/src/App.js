import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Routes, Route, Link} from 'react-router-dom';
import Blogs from './components/pages/Blogs';
import NewsCard from './components/pages/NewsCard';
import Navbar from './components/navbar'
import Home from './components/pages/Home';
import Art from './components/pages/Art';



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
        <Route path='art' element={<Art/>}></Route>
      </Routes>
    </Router>

    </>
  );
}

export default App;

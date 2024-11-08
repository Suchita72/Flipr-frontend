
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Routes,Route ,BrowserRouter} from 'react-router-dom';
import Home from './components/Home'
import Contact from './components/Contact'
import Privacy from './components/Privacy'
import Author from './components/Author'
import Category from './components/Category';
import About from './components/About';
import BlogSection from './components/BlogSection';
import Read from './components/Read';
import Blog from './components/Blog';
function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
            <Nav />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/blog' element={<Blog/>}/>
               <Route path="/category" element={< Category/>} /> 
              <Route path="/author" element={<Author/>} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} /> 
              <Route path='/about' element={<About/>}/>
              <Route path='/read' element={<Read/>}/>
            </Routes>
             <Footer/>  
          </BrowserRouter>
    </div>
  );
}

export default App;

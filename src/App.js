import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Body/Navbar';
import PreLoader from './Components/Body/PreLoader';
import HomePage from './Components/Main/HomePage';
import ShopMain from './Components/Main/ShopMain';
import ProfileMain from './Components/Main/ProfileMain';
import Form from './Components/Main/Form';
import Footer from './Components/Body/Footer';
import UserProfile from './Components/Profile/UserProfile';
import WorkingVideo from './Components/Main/WorkingVideo';
import About from './Components/Profile/About';
import Social from './Components/Profile/Social';
import Portfolio from './Components/Profile/Portfolio';
import ShopScreem from './Components/Main/ShopScreem';
import ItemForm from './Components/Form.jsx/ItemForm';
import PortfolioForm from './Components/Main/PortfolioForm';
import UserForm from './Components/Form.jsx/UserForm';

function App() {
  return (
    <div>
      <Router>
        <PreLoader />
        <Navbar />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/ShopMain' element={<ShopMain />} />
          <Route path='/ProfileMain' element={<ProfileMain />} />
          <Route path='/WorkingVideo' element={<WorkingVideo />} />
          <Route path='/UserProfile' element={<UserProfile />} />
          <Route path='/About' element={<About />} />
          <Route path='/Social' element={<Social />} />
          <Route path='/Portfolio' element={<Portfolio />} />
          <Route path='/ShopScreem' element={<ShopScreem />} />

          <Route path='/PortfolioForm' element={<UserForm />} />
          <Route path='/Form' element={<Form />} />
          <Route path='/ItemForm' element={<ItemForm />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;

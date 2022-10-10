import './App.css';
import Banner from './Components/Body/Banner';
import Categories from './Components/Body/Categories';
import Footer from './Components/Body/Footer';
import Instructions from './Components/Body/Instructions';
import Navbar from './Components/Body/Navbar';
import PreLoader from './Components/Body/PreLoader';
import Shop from './Components/Body/Shop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageHeading from './Components/Explore/PageHeading';
import TopSeller from './Components/Explore/TopSeller';
import Discover from './Components/Explore/Discover';
import UserForm from './Components/Form.jsx/UserForm';
import HomePage from './Components/Main/HomePage';
import ShopMain from './Components/Main/ShopMain';
import ProfileMain from './Components/Main/ProfileMain';
import ItemModal from './Components/Modal/ItemModal';
import SignIn from './Components/Auth/SignIn';
import SignUp from './Components/Auth/SignUp';
import Form from './Components/Main/Form';
import WorkingVideo from './Components/Main/WorkingVideo';

function App() {
  return (
    <div>

     

      {/* <ItemModal /> */}


      <Router>
        <PreLoader />
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/ShopMain' element={<ShopMain />} />
          <Route path='/ProfileMain' element={<ProfileMain />} />
          <Route path='/Form' element={<Form />} />
          <Route path='/WorkingVideo' element={<WorkingVideo />} />
        </Routes>
        <Footer />
      </Router> 
    </div>
  );
}

export default App;

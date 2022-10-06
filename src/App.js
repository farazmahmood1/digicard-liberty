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
import PageIntro from './Components/Form.jsx/PageIntro';
import UserForm from './Components/Form.jsx/UserForm';
import HomePage from './Components/Main/HomePage';

function App() {
  return (
    <div>

      {/* <PreLoader />
      <Navbar />
      <Banner />
      <Categories />
      <Instructions />
      <Footer /> */}
      {/* <Shop /> */}

      {/* <PreLoader />
      <Navbar />
      <PageHeading />
      <Discover />
      <TopSeller />
      <Footer /> */}
{/* 
      <PreLoader />
      <Navbar />
      <PageIntro />
      <UserForm />
      <Footer /> */}

      {/* <PreLoader />
      <Navbar />
      <PageIntro />
      <Shop />
      <Footer /> */}

      <Router>
        <PreLoader />
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          {/* <Route path='/Categories' element={<Categories />} />
          <Route path='/Instructions' element={<Instructions />} />
          <Route path='/Shop' element={<Shop />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

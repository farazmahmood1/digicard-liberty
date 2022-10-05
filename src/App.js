import './App.css';
import Banner from './Components/Body/Banner';
import Categories from './Components/Body/Categories';
import Footer from './Components/Body/Footer';
import Instructions from './Components/Body/Instructions';
import Navbar from './Components/Body/Navbar';
import PreLoader from './Components/Body/PreLoader';
import Shop from './Components/Body/Shop';
import TrendItem from './Components/Body/TrendItem';
function App() {
  return (
    <div>
      <PreLoader />
      <Navbar />
      <Banner />
      <Categories />
      <TrendItem />
      <Instructions />
      <Shop />
      <Footer />
    </div>
  );
}

export default App;

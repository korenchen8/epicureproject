
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import IconMeaning from './components/IconMeaning/IconMeaning';
import PopularRestaurants from './components/PopularRestaurants/PopularRestaurants'
import SignatureDish from './components/SignatureDish/SignatureDish';
import ChefSection from './components/ChefSection/ChefSection';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
    return (
    <div >
      <Header />
      <Hero />
      <PopularRestaurants />
      <SignatureDish />
      <IconMeaning />
      <ChefSection />
      <AboutUs />
    </div>
  );
  
}

export default App

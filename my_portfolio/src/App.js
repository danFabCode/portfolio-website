import './App.css';
import Analytics from './components/Analytics';
import Hero from './components/Hero';
import Newsletter from './components/Newsletter';
import Navbar from './components/navbar';
import SelectionCard from './components/SelectionCard';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Analytics/>
      <Newsletter/>
      <SelectionCard/>
      <Footer/>
    </div>
  );
}

export default App;

import './App.css';
import Analytics from './components/Analytics';
import Hero from './components/Hero';
import Newsletter from './components/Newsletter';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Analytics/>
      <Newsletter/>
    </div>
  );
}

export default App;

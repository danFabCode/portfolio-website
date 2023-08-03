import './App.css';
import Analytics from './components/Analytics';
import Hero from './components/Hero';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Analytics/>
    </div>
  );
}

export default App;

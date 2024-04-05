import './App.css';
import Header from './features/Header';
import Home from './features/home/Home';
import About from './features/about/index'
import ContactMe from './features/contact';




function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Home />
        <About />
        <ContactMe />
      </div>
    </div>
  );
}

export default App;

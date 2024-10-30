import './App.css';
import Header from './features/Header';
import Home from './features/home/Home';
import About from './features/about/index'
import ContactMe from './features/contact';
import Experience from './features/experience/Experience';





function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Home />
        <About />
        <Experience />
        <ContactMe />
      </div>
    </div>
  );
}

export default App;

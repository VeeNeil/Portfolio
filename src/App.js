import './App.scss';
import { Sidebar } from './components/Sidebar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css"
function App() {
  return (
    <div className= "App">
      <Sidebar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;

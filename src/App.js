import './App.css';
import { Banner } from './components/Banner';
import { NavBar } from './components/NavBar';
import { Skills } from './components/Skills';
import { Sections } from './components/Sections';

import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Sections />
      <Skills />
    </div>
  );
}

export default App;



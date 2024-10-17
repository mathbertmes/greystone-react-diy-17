
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';

import './App.css';
import About from './components/about';
import NotFound from './components/not-found';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  );
}

export default App;

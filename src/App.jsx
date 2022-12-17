import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Publications from './pages/Publications';
import Notices from './pages/Notices';

var vh = 0;

function App() {
  useEffect(() => {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/publications' element={<Publications />} />
        <Route path='/notices' element={<Notices />} />
      </Routes>
    </Layout>
  );
}

export default App;

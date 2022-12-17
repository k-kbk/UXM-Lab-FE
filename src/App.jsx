import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import Home from './pages/Home';
import Publications from './pages/Publications';

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
        {/* <Route path='/members' element={<Members />} /> */}
        {/* <Route path='/studies' element={<Studies />} /> */}
        <Route path='/publications' element={<Publications />} />
        {/* <Route path='/news' element={<News />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;

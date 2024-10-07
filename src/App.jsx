import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout';
import School from './Components/school';
import Course from './Components/course';
import Place from './Components/place';
import WillGive from './Components/whatWillGive';
import Footer from './Components/Footer';
import RegisterPage from './pages/RegisterPage'; 
import AboutUs from './pages/aboutUs'; 
import Blog from './pages/blog'; 
import Kap from './pages/kap'; 

function App() {
  return (
    <Router>
        <Layout />
      <Routes>
        <Route path="/" element={
          <>
            <School />
            <Course />
            <Place />
            <WillGive />
            <Footer />
          </>
        } />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/kap" element={<Kap />} />
      </Routes>
    </Router>
  );
}

export default App;

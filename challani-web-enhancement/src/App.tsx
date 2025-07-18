import { Box } from '@mui/material';
import './App.css'
import CollectionSection from './components/Collections/Collections';
import { Footer } from './components/Footer/Footer';
import HeroSection from './components/Hero/Hero';
import Navbar from './components/NavBar/Navbar';
import CategoryExplorer from './components/CategoryBar/CategoryBar';
import WhyMe from './components/WhyUs/WhyUs';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <>
      <Navbar />
      <CategoryExplorer />
      <Box mt="8rem">
        <HeroSection />
        <WhyMe />
        <CollectionSection />
        <Testimonials />
      </Box>
      <Footer />
    </>
  );
}

export default App;

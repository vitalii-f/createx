import {Route, Routes} from 'react-router-dom';
import { Header } from './components/Header';
import { AboutPage } from './pages/AboutPage';
import { ContactsPage } from './pages/ContactsPage';
import { MainPage } from './pages/MainPage';
import { NewsPage } from './pages/NewsPage';
import { ServicesPage } from './pages/ServicesPage';
import { WorkPage } from './pages/WorkPage';
import './reset.css';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={ <MainPage /> } />
        <Route path="/about" element={<AboutPage /> } />
        <Route path="/services" element={<ServicesPage /> } />
        <Route path="/work" element={<WorkPage /> } />
        <Route path="/news" element={<NewsPage /> } />
        <Route path="/contacts" element={<ContactsPage /> } />
      </Routes>
    </>
    
  );
}

export default App;

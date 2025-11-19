import { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import HomePage from './pages/HomePage';
import ProgramsPage from './pages/ProgramsPage';
import CollegesPage from './pages/CollegesPage';
import StudentsPage from './pages/StudentsPage';
import EventsPage from './pages/EventsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'programs':
        return <ProgramsPage onNavigate={handleNavigate} />;
      case 'colleges':
        return <CollegesPage onNavigate={handleNavigate} />;
      case 'students':
        return <StudentsPage onNavigate={handleNavigate} />;
      case 'events':
        return <EventsPage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0C10]">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
      <FloatingCTA onBookProgram={() => handleNavigate('contact')} />
    </div>
  );
}

export default App;

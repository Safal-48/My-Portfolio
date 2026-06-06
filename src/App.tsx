import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';
import WallOfFame from './sections/WallOfFame';
import TerminalSection from './sections/TerminalSection';
import ContactSection from './sections/ContactSection';
import ContactModal from './components/ContactModal';
import { ContactModalProvider } from './components/ContactModalContext';

function App() {
  return (
    <ContactModalProvider>
      <div
        style={{
          backgroundColor: '#0c0c0c',
          fontFamily: "'Kanit', sans-serif",
          overflowX: 'clip',
        }}
      >
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <WallOfFame />
        
        {/* Interactive Dev Console Section */}
        <TerminalSection />
        
        <ContactSection />
        
        {/* Contact info overlay modal */}
        <ContactModal />
      </div>
    </ContactModalProvider>
  );
}

export default App;

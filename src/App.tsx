import HeroSection from './components/HeroSection';
import CompilerPipeline from './components/CompilerPipeline';
import GCCFunnel from './components/GCCFunnel';
import LinkerSection from './components/LinkerSection';
import ABISection from './components/ABISection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CompilerPipeline />
      <GCCFunnel />
      <LinkerSection />
      <ABISection />
      <Footer />
    </div>
  );
}

export default App;

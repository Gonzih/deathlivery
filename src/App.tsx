import './App.css'
import Hero from './components/Hero'
import SystemSpecs from './components/SystemSpecs'
import DeploymentSequence from './components/DeploymentSequence'
import SiteFooter from './components/SiteFooter'

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Hero />
      <SystemSpecs />
      <DeploymentSequence />
      <SiteFooter />
    </div>
  )
}

export default App

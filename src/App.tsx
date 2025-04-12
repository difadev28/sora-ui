import './App.css'
import SectionBadge from './components/section/SectionBadge'
import SectionButton from './components/section/SectionButton'
import SectionSpinner from './components/section/SectionSpinner'
import SectionSwitchButton from './components/section/SectionSwitchButton'

function App() {
  return (
    <div>
      <SectionButton />
      <SectionBadge />
      <SectionSpinner />
      <SectionSwitchButton />
    </div>
  )
}

export default App

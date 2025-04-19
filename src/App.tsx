import './App.css'
import SectionBadge from './components/section/SectionBadge'
import SectionButton from './components/section/SectionButton'
import SectionSpinner from './components/section/SectionSpinner'
import SectionSwitchButton from './components/section/SectionSwitchButton'
import SectionTooltip from './components/section/SectionTooltip'

function App() {
  return (
    <div>
      <SectionButton />
      <SectionBadge />
      <SectionSpinner />
      <SectionSwitchButton />
      <SectionTooltip />
    </div>
  )
}

export default App

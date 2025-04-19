import './App.css'
import SectionBadge from './components/section/SectionBadge'
import SectionButton from './components/section/SectionButton'
import SectionModalBase from './components/section/SectionModalBase'
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
      <SectionModalBase />
    </div>
  )
}

export default App

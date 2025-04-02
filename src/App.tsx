import { Button } from '../packages/components/atoms/button/src'
import './App.css'

function App() {
  return (
    <div>
      <div className='flex gap-2.5'>
        <Button size="small" variant='primary'>
          Primary Button
        </Button>
        <Button size="small" variant='secondary'>
          Secondary Button
        </Button>
        <Button size="small" variant='ghost'>
          Ghost Button
        </Button>
        <Button variant='primary' size='medium'>
          Primary small Button
        </Button>
        <Button variant='secondary' size='medium'>
          Secondary medium Button
        </Button>
        <Button variant='secondary' size='large'>
          Secondary Large Button
        </Button>
        <Button variant='primary' size='large'>
          Primary Large Button
        </Button>

      </div>
    </div>
  )
}

export default App

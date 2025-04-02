import { Button } from '@sora-ui-material/button'

const SectionButton = () => {
  return (
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
      <Button size="small" variant='medium'>
        Ghost Button
      </Button>
      <Button variant='primary' size='large'>
        Primary Large Button
      </Button>
      <Button variant='secondary' size='large'>
        Secondary Large Button
      </Button>
    </div>
  )
}

export default SectionButton;
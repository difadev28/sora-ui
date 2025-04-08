import { Button } from '@sora-ui-material/button'
import { Spinner } from '@sora-ui-material/spinner'

const SectionSpinner = () => {
  return (
    <div className='flex gap-2.5 border border-custom-primary p-3 m-3 flex-col items-start rounded-2xl'>
      <Button variant='primary'>
        <Spinner className='!text-white' /> Loading
      </Button>
    </div>
  )
}

export default SectionSpinner;
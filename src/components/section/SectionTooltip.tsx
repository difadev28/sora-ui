import { Button } from '@sora-ui-material/button'
import { Tooltip } from '@sora-ui-material/tooltip'

const SectionTooltip = () => {
  return (
    <div className='flex gap-2.5 border border-custom-primary p-3 m-3 flex-col items-start rounded-2xl'>
      <Button 
        variant='secondary'
        className='!border-custom-primary !text-custom-primary'
      >
        Tooltip Sample 
        <Tooltip  
          content={"Masuk"} 
          className={{
            container: "text-custom-primary"
          }}
        />
      </Button>
    </div>
  )
}

export default SectionTooltip;
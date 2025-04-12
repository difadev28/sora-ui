import {SwitchButton} from '../../../packages/components/atoms/switch-button/src'

const SectionSwitchButton = () => {
  return (
    <div className='flex gap-2.5 border border-custom-primary p-3 m-3 flex-col items-start rounded-2xl'>
      <SwitchButton 
        onCheckedChange={() => {}}
        checked={false}
      />
    </div>
  )
}

export default SectionSwitchButton;
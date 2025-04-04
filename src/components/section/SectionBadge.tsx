import { Badge } from '../../../packages/components/atoms/badge/src'

const SectionBadge = () => {
  return (
    <div className='flex gap-2.5 border border-custom-primary p-3 m-3 flex-col items-start rounded-2xl'>
      <Badge 
        titleSize='12px'
        title={"Badge Sample"}
      />
    </div>
  )
}

export default SectionBadge;
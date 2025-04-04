import { Button } from '@sora-ui-material/button'

const SectionButton = () => {
  type TypeButton = {
    title:string,
    primary: string,
    secondary: string,
    ghost: string,
    variant: 'small' | 'medium' | 'large' | undefined
  }
  const variantButton = [
    {
      title: 'Button Small',
      primary: 'Primary Button',
      secondary: 'Secondary Button',
      ghost: 'Ghost Button',
      variant: 'small'
    }, {
      title: 'Button Medium',
      primary: 'Primary Medium Button',
      secondary: 'Secondary Medium Button',
      ghost: 'Ghost Medium Button',
      variant: 'medium'
    }, {
      title: 'Button Large',
      primary: 'Primary Large Button',
      secondary: 'Secondary Large Button',
      ghost: 'Ghost Large Button',
      variant: 'large'
    }
  ] as TypeButton[]

  return (
    variantButton.map((item) => (
      <div key={item.variant} className='flex gap-2.5 border border-custom-primary p-3 m-3 flex-col items-start rounded-2xl'>
        <p className='text-sm text-custom-primary'>{item.title}</p>
        <div className='flex gap-3'>
          <Button size={item.variant} variant='primary'>
            {item.primary}
          </Button>
          <Button size={item.variant} variant='secondary'>
            {item.secondary}
          </Button>
          <Button size={item.variant} variant='ghost'>
            {item.ghost}
          </Button>
        </div>
      </div>
    ))
  
  )
}

export default SectionButton;
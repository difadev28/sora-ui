import { useEffect, useState } from 'react'
import clsx from 'clsx';

type SwitchButtonProps = {
  onCheckedChange: (value: boolean) => void;
  checked: boolean;
}

const SwitchButton = ({ onCheckedChange, checked }: SwitchButtonProps) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
    onCheckedChange(!isChecked)
  }

  useEffect(() => {
    setIsChecked(checked)
  }, [checked])

  return (
    <label className={'switch'} htmlFor='switch' aria-label="Toggle switch">
      <div className={'switch__container'}>
        <input
          id={"switch"}
          type='checkbox'
          data-testid='switch-checkbox'
          checked={isChecked}
          onChange={handleCheckboxChange}
          className='sr-only'
        />
        <div
          className={clsx(`switch__container__toggle`, isChecked && `switch__container__toggle--checked`)}
        ></div>
        <div
          className={clsx(`switch__container__circle`, isChecked && `switch__container__circle--checked`)}
        ></div>
      </div>
    </label>
  )
}

export default SwitchButton;

import { useEffect, useState } from 'react'
import styles from './SwitchButton.module.scss'
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
    <label className={styles['switch']} htmlFor='switch' aria-label="Toggle switch">
      <div className={styles['switch__container']}>
        <input
          id={"switch"}
          type='checkbox'
          data-testid='switch-checkbox'
          checked={isChecked}
          onChange={handleCheckboxChange}
          className='sr-only'
        />
        <div
          className={clsx(styles[`switch__container__toggle`], isChecked && styles[`switch__container__toggle--checked`])}
        ></div>
        <div
          className={clsx(styles[`switch__container__circle`], isChecked && styles[`switch__container__circle--checked`])}
        ></div>
      </div>
    </label>
  )
}

export default SwitchButton;

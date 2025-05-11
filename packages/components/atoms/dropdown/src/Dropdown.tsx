import { useState } from "react";
import styles from "./Dropdown.module.scss";
import ArrowDown from "./assets/ArrowDownIcon";
import ArrowTop from "./assets/ArrowTopIcon";
import clsx from "clsx";
import useClickOutside from "./utils/useClickOutside";
import { DropdownProps } from "./type";

interface DropdownOption {
  id: number | string;
  name: string;
}

interface DropdownButtonProps {
  isOpen: boolean;
  value: DropdownOption | null;
  placeholder?: string;
  disabled?: boolean;
  onClick: () => void;
  dataTestId?: string;
}

const DropdownButton = ({
  isOpen,
  value,
  placeholder,
  disabled,
  onClick,
  dataTestId
}: DropdownButtonProps) => (
  <button
    data-testid={dataTestId ?? 'dropdown'}
    disabled={disabled}
    type="button"
    onClick={onClick}
    className={clsx(
      styles['container-base-dropdown__dropdown-button'],
      isOpen && styles['container-base-dropdown--active'],
      disabled && styles['container-base-dropdown--disabled']
    )}
  >
    <p>{value ? value.name : placeholder}</p>
    {isOpen ? (
      <ArrowTop className={styles['icon-arrow']} fill="black" />
    ) : (
      <ArrowDown className={styles['icon-arrow']} fill="black" />
    )}
  </button>
);

interface DropdownMenuProps {
  options: DropdownOption[];
  value: DropdownOption | null;
  onSelect: (option: DropdownOption) => void;
  emptyLabel?: string;
}

const DropdownMenu = ({ options, value, onSelect, emptyLabel }: DropdownMenuProps) => (
  <div className={styles['container-base-dropdown__menu']}>
    <ul className={styles['container-base-dropdown__options-list']}>
      {options.length > 0 ? (
        options.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => onSelect(item)}
              data-testid={`list-${item.id}`}
              className={clsx(
                styles['container-base-dropdown__option-item'],
                item.id === value?.id && styles['container-base-dropdown__option-item--active']
              )}
            >
              {item.name}
            </button>
          </li>
        ))
      ) : (
        <li data-testid="dt-not-found" className={styles['container-base-dropdown__noOptions']}>
          {emptyLabel ?? 'No Data'}
        </li>
      )}
    </ul>
  </div>
);

const Dropdown = ({
  options = [],
  name,
  value,
  handleChangeData,
  className,
  config
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClosePopup = () => setIsOpen(false);
  const ref = useClickOutside(handleClosePopup);

  const handleSelect = (item: DropdownOption) => {
    setIsOpen(false);
    handleChangeData(name, item);
  };

  return (
    <div
      className={clsx(styles['container-base-dropdown'], className?.container)}
      ref={ref}
    >
      <DropdownButton
        isOpen={isOpen}
        value={value}
        placeholder={config?.placeholder}
        disabled={config?.disabled}
        onClick={() => setIsOpen(!isOpen)}
        dataTestId={config?.id}
      />
      {isOpen && (
        <DropdownMenu
          options={options}
          value={value}
          onSelect={handleSelect}
          emptyLabel={config?.label_empty}
        />
      )}
    </div>
  );
};

export default Dropdown;
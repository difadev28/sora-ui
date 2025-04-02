import { ComponentPropsWithRef, ReactNode, forwardRef } from 'react';

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  children: ReactNode;
  themeColor?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded' | 'squared';
}

const Button = forwardRef<HTMLButtonElement, ComponentPropsWithRef<'button'> & ButtonProps>(
  (
    {
      variant = 'primary', 
      size = 'medium',
      shape = 'rounded',
      children,
      className = '',
      style = {},
      disabled,
      ...rest
    }: ButtonProps,
    ref,
  ) => {
    const buttonClasses = ['button', variant, size, shape, className]
      .filter(Boolean)
      .join(' ');
    return (
      <button
        disabled={disabled}
        ref={ref}
        style={{ ...style }}
        className={`${buttonClasses} ${disabled ? 'disabled' : ''}`}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
export default Button
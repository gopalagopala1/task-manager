import clsx from 'clsx';

export interface ButtonProps {
  text: string;
  variant: 'solid' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick: () => void;
}

const Button = ({
  text,
  variant = 'solid',
  size = 'md',
  leftIcon,
  rightIcon,
  className,
  onClick,
}: ButtonProps) => {
  const sizeClasses = clsx('rounded-md px-4 py-2', {
    'text-sm': size === 'sm',
    'text-md': size === 'md',
    'text-lg': size === 'lg',
  });

  const variantClasses = clsx('rounded-md px-4 py-2', {
    'bg-purple text-white': variant === 'solid',
    'border border-purple text-purple': variant === 'outline',
  });

  const iconClasses = clsx('mr-2', {
    'text-sm': size === 'sm',
    'text-md': size === 'md',
    'text-lg': size === 'lg',
  });

  return (
    <button
      className={clsx(sizeClasses, variantClasses, className)}
      onClick={onClick}
    >
      {leftIcon && <span className={iconClasses}>{leftIcon}</span>}
      {text}
      {rightIcon && <span className={iconClasses}>{rightIcon}</span>}
    </button>
  );
};

export default Button;

import clsx from 'clsx';

interface TextProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  weight?: 'light' | 'regular' | 'medium' | 'bold';
  color?: 'primary' | 'secondary' | 'tertiary';
  className?: string;
}

const Text = ({ children, size, weight, color, className }: TextProps) => {
  const sizeClasses = clsx({
    'text-sm': size === 'sm',
    'text-md': size === 'md',
    'text-lg': size === 'lg',
    'text-xl': size === 'xl',
    'text-2xl': size === '2xl',
  });

  const weightClasses = clsx({
    'font-regular': weight === 'regular',
    'font-medium': weight === 'medium',
    'font-bold': weight === 'bold',
  });

  const colorClasses = clsx({
    'text-primary': color === 'primary',
    'text-secondary': color === 'secondary',
    'text-tertiary': color === 'tertiary',
  });

  return (
    <p className={clsx(sizeClasses, weightClasses, colorClasses, className)}>
      {children}
    </p>
  );
};

export default Text;

import clsx from 'clsx';

export interface ButtonProps {
  text: string;
  variant: 'solid' | 'outline';
  onClick: () => void;
}

const Button = ({ text, variant, onClick }: ButtonProps) => {
  const variantClasses = clsx({
    'bg-blue text-white': variant === 'solid',
    'border border-blue text-blue': variant === 'outline',
  });

  return (
    <button className={variantClasses} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;

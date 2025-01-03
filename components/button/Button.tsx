import cn from 'clsx';
import {IconType} from 'react-icons';

export interface IButton extends React.ComponentPropsWithoutRef<'button'> {
  label?: string;
  variant?: 'filled' | 'tonal' | 'outlined' | 'text';
  LeftIcon?: IconType;
  RightIcon?: IconType;
}

// TODO: Styled for when disabled
export function Button({
  label,
  variant = 'tonal',
  className,
  LeftIcon,
  RightIcon,
  ...others
}: IButton) {
  return (
    <button
      className={cn(
        'px-3 py-2 rounded-lg hover:underline flex items-center gap-1 group cursor-pointer',
        'disabled:bg-bland-200 disabled:text-bland-400 disabled:cursor-not-allowed',
        variant === 'filled' &&
          'text-white bg-primary-400 hover:bg-primary-500',
        variant === 'tonal' &&
          'text-primary-500 bg-primary-100 hover:bg-primary-200',
        variant === 'outlined' &&
          'text-primary-500 ring-1 ring-primary-400 hover:bg-primary-400 hover:text-white',
        variant === 'text' && 'text-primary-400 !p-0',
        className,
      )}
      {...others}
    >
      {LeftIcon && <LeftIcon />}
      {label && <p>{label}</p>}
      {RightIcon && <RightIcon />}
    </button>
  );
}

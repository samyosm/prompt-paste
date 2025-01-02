import cn from 'clsx';
import {useId} from 'react';
import {IconType} from 'react-icons';

export interface IInput extends React.ComponentPropsWithoutRef<'input'> {
  label?: string;
  IconRight?: IconType;
  IconLeft?: IconType;
  iconLeft?: boolean;
  message?: React.ReactNode;
}

export function Input({
  className,
  label,
  IconRight,
  IconLeft,
  message,
  ...rest
}: IInput) {
  const id = useId();
  return (
    <div className="space-y-1 w-full">
      {label && <label htmlFor={id}>{label}</label>}

      {message}
      <div
        className={cn(
          'flex items-center gap-2 rounded-xl bg-white ring-1 ring-bland-200 text-bland-500 *:py-3 px-3',
          'has-focus:ring-bland-500 has-focus:text-bland-900',
          'hover:ring-bland-300',
        )}
      >
        {IconLeft && (
          <label htmlFor={id}>
            <IconLeft />
          </label>
        )}

        <input
          className={cn(
            'placeholder:text-bland-500 text-bland-900 outline-hidden w-full h-full',
            className,
          )}
          id={id}
          {...rest}
        />

        {IconRight && (
          <label htmlFor={id}>
            <IconRight />
          </label>
        )}
      </div>
    </div>
  );
}

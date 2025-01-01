import cn from 'clsx';

export interface ITextarea extends React.ComponentPropsWithoutRef<'textarea'> {}

export function Textarea({className, ...rest}: ITextarea) {
  return (
    <textarea
      className={cn(
        'w-full resize-none p-5 rounded-xl ring-1 placeholder:ring-bland-500 ring-bland-200 outline-none text-bland-900',
        'focus:ring-bland-500',
        className,
      )}
      {...rest}
    />
  );
}

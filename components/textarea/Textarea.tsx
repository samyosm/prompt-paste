'use client';
import cn from 'clsx';

export interface ITextarea extends React.ComponentPropsWithoutRef<'textarea'> {
  autoResize?: boolean;
}

export function Textarea({
  className,
  onInput,
  autoResize = false,
  ...rest
}: ITextarea) {
  // Note: This serves to remplace `field-sizing: content` which is currently not well supported
  function handleOnInput(e: React.SyntheticEvent<HTMLTextAreaElement>) {
    if (onInput) {
      onInput(e);
    }

    e.currentTarget.style.height = '';
    e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px';
  }

  return (
    <textarea
      className={cn(
        'w-full resize-none h-fit p-5 rounded-xl ring-1 placeholder:ring-bland-500 ring-bland-200 outline-hidden text-bland-900',
        'focus:ring-bland-500',
        className,
      )}
      onInput={handleOnInput}
      {...rest}
    />
  );
}

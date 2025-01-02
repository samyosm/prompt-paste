'use client';
import {useFormStatus} from 'react-dom';
import {Button, IButton} from './Button';

import {HiArrowRight as SubmitIcon} from 'react-icons/hi2';

export interface ISubmitButton extends Omit<IButton, 'type' | 'disabled'> {
  pendingLabel: string;
}

export function SubmitButton({label, pendingLabel, ...rest}: ISubmitButton) {
  const {pending} = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      RightIcon={() => (
        <SubmitIcon className="transition-transform duration-200 group-hover:translate-x-1" />
      )}
      {...rest}
      label={pending ? pendingLabel : label}
    />
  );
}

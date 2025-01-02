'use client';
import {useRouter} from 'next/navigation';
import {Button, IButton} from './Button';

export interface ILinkButton extends Omit<IButton, 'role' | 'onClick'> {
  href: string;
}

export function LinkButton({href, ...rest}: ILinkButton) {
  const router = useRouter();
  function handleClick() {
    router.push(href);
  }
  return <Button onClick={handleClick} role="link" {...rest} />;
}

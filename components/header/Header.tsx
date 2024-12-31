import {Logo} from '../logo/Logo';
import cn from 'clsx';

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {
  children: React.ReactNode;
}

export function Header({children, className, ...rest}: IHeader) {
  return (
    <header
      className={cn('flex items-center justify-between p-5', className)}
      {...rest}
    >
      <Logo />
      {children}
    </header>
  );
}

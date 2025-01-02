'use client';
import {Input} from '@/components/input/Input';
import {usePathname, useSearchParams} from 'next/navigation';
import {useCallback, useState} from 'react';
import {useRouter} from 'next/navigation';

export interface IPromptCatalog {
  children: React.ReactNode;
}

export function PromptCatalog({children}: IPromptCatalog) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [search, setSearch] = useState('');

  function handleInput(e: React.SyntheticEvent<HTMLInputElement>) {
    const value = e.currentTarget.value;
    setSearch(value);
    router.push(pathname + '?' + createQueryString('query', value));
  }

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  return (
    <div className="mx-4 flex size-full max-w-xl flex-col gap-2 overflow-y-auto p-1 scrollbar-thin">
      <Input
        onInput={handleInput}
        value={search}
        type="search"
        name="search"
        placeholder="Search"
      />
      <section className="grid grid-cols-2 gap-2">{children}</section>
    </div>
  );
}

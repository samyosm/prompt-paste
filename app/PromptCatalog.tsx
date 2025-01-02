'use client';
import {Input} from '@/components/input/Input';
import {usePathname, useSearchParams} from 'next/navigation';
import {useCallback, useState} from 'react';
import {useRouter} from 'next/navigation';
import {Button} from '@/components/button/Button';
import {HiMagnifyingGlass as SearchIcon} from 'react-icons/hi2';

export interface IPromptCatalog {
  children: React.ReactNode;
}

export function PromptCatalog({children}: IPromptCatalog) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  function pushSearch(query: string) {
    router.push(pathname + '?' + createQueryString('query', query));
  }

  function handleAction(formData: FormData) {
    const query = formData.get('search')?.toString() || '';
    pushSearch(query);
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
      <form className="flex gap-2 items-center w-full" action={handleAction}>
        <Input type="search" className="" name="search" placeholder="Search" />
        <Button
          type="submit"
          RightIcon={SearchIcon}
          className="h-full !p-3 rounded-xl"
        />
      </form>
      <section className="grid grid-cols-2 gap-2">{children}</section>
    </div>
  );
}

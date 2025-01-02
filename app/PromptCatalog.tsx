'use client';
import {Input} from '@/components/input/Input';
import {usePathname, useSearchParams} from 'next/navigation';
import {useCallback} from 'react';
import {useRouter} from 'next/navigation';
import {Button} from '@/components/button/Button';

import {HiMagnifyingGlass as SearchIcon} from 'react-icons/hi2';
import {HiChevronLeft as LeftIcon} from 'react-icons/hi2';
import {HiChevronRight as RightIcon} from 'react-icons/hi2';

export interface IPromptCatalog {
  children: React.ReactNode;
}

export function PromptCatalog({children}: IPromptCatalog) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const page = Number(searchParams.get('p'));

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

  function paginate(prev?: boolean) {
    const currentPage = Number(searchParams.get('p'));
    const page = Math.max(prev ? currentPage - 1 : currentPage + 1, 0);
    router.push(pathname + '?' + createQueryString('p', page.toString()));
  }

  return (
    <div className="lg:mx-4 mx-4 flex lg:w-full lg:max-w-xl flex-col gap-2 overflow-y-auto p-1 lg:pb-2 h-full">
      <form className="flex gap-2 items-center w-full" action={handleAction}>
        <Input
          type="search"
          defaultValue={searchParams.get('query') || ''}
          name="search"
          placeholder="Search"
        />
        <Button
          type="submit"
          variant="filled"
          RightIcon={SearchIcon}
          className="h-full !p-3 rounded-xl"
        />
      </form>
      <section className="grid grid-cols-1 xl:grid-cols-2 gap-2">
        {children}
      </section>
      <div className="flex w-full justify-between items-center">
        <Button
          LeftIcon={LeftIcon}
          onClick={() => paginate(true)}
          disabled={page === 0}
        />
        <p>Page {page + 1}</p>
        <Button RightIcon={RightIcon} onClick={() => paginate()} />
      </div>
    </div>
  );
}

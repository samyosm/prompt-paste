'use client';
import {faker} from '@faker-js/faker';
import cn from 'clsx';
import {PromptAttributes} from '../prompt-attributes/PromptAttribute';
import Link from 'next/link';
import {useParams} from 'next/navigation';

export interface IPromptCard {
  title: string;
  date: Date;
  author: string;
  href: string;
}

export function randomPromptCard(): IPromptCard {
  return {
    title: faker.lorem.sentence(),
    date: faker.date.past(),
    author: faker.internet.username(),
    href: faker.string.nanoid(),
  };
}

export function PromptCard({title, date, author, href}: IPromptCard) {
  const {slug} = useParams();
  return (
    <Link
      href={href}
      className={cn(
        'flex flex-col justify-between gap-2 rounded-xl bg-white p-4 ring-1 ring-inset ring-bland-200',
        'hover:ring-bland-400 hover:shadow-xs hover:bg-bland-50 cursor-pointer', // TODO: Make into a real link
        slug === href && 'ring-primary-500 hover:ring-primary-500 !bg-bland-50',
      )}
    >
      <p className="line-clamp-2 font-medium">{title}</p>
      <PromptAttributes date={date} author={author} />
    </Link>
  );
}

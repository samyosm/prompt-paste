import {faker} from '@faker-js/faker';
import cn from 'clsx';
import {PromptAttributes} from '../prompt-attributes/PromptAttribute';

export interface IPromptCard {
  title: string;
  date: Date;
  author: string;
}

export function randomPromptCard(): IPromptCard {
  return {
    title: faker.lorem.sentence(),
    date: faker.date.past(),
    author: faker.internet.username(),
  };
}

export function PromptCard({title, date, author}: IPromptCard) {
  return (
    <div
      className={cn(
        'flex flex-col justify-between gap-2 rounded-xl bg-white p-4 ring-1 ring-inset ring-bland-200',
        'hover:ring-bland-400 hover:shadow-xs hover:bg-bland-50 cursor-pointer', // TODO: Make into a real link
      )}
    >
      <p className="line-clamp-2 font-medium">{title}</p>
      <PromptAttributes date={date} author={author} />
    </div>
  );
}

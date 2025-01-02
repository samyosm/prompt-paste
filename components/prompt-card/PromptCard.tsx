import dayjs from 'dayjs';
import {faker} from '@faker-js/faker';
import cn from 'clsx';

import {HiOutlineClock as TimeIcon} from 'react-icons/hi2';

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
  const formattedDate = dayjs(date).fromNow(false);
  return (
    <div
      className={cn(
        'flex flex-col justify-between gap-2 rounded-xl bg-white p-4 ring-1 ring-inset ring-bland-200',
        'hover:ring-bland-400 hover:shadow-xs hover:bg-bland-50 cursor-pointer', // TODO: Make into a real link
      )}
    >
      <p className="line-clamp-2 font-medium">{title}</p>
      <div>
        <p>{`@${author}`}</p>
        <p className="flex items-center gap-1">
          <TimeIcon />
          <time
            dateTime={date.toISOString()}
            className="first-letter:uppercase"
          >
            {formattedDate}
          </time>
        </p>
      </div>
    </div>
  );
}

import dayjs from 'dayjs';
import {HiOutlineClock as TimeIcon} from 'react-icons/hi2';
import '@/setup/dayjs';

export interface IPromptAttributes
  extends React.ComponentPropsWithoutRef<'div'> {
  date: Date;
  author: string;
}

export function PromptAttributes({date, author, ...rest}: IPromptAttributes) {
  const formattedDate = dayjs(date).fromNow();
  return (
    <div {...rest}>
      <p>{`@${author}`}</p>
      <p className="flex items-center gap-1">
        <TimeIcon />
        <time dateTime={date.toISOString()} className="first-letter:uppercase">
          {formattedDate}
        </time>
      </p>
    </div>
  );
}

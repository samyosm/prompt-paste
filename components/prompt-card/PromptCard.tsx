import dayjs from 'dayjs';

export interface IPromptCard {
  title: string;
  date: Date;
  author: string;
}

export function PromptCard({title, date, author}: IPromptCard) {
  const formattedDate = dayjs(date).fromNow(false);
  return (
    <div className="space-y-2 rounded-xl bg-white p-4 ring-1 ring-bland-100">
      <p className="line-clamp-2 font-medium">{title}</p>
      <p>
        <span>{`By ${author} • `}</span>
        <time dateTime={date.toISOString()}>{formattedDate}</time>
      </p>
    </div>
  );
}

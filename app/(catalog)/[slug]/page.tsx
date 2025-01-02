import { Button } from '@/components/button/Button';
import { faker } from '@faker-js/faker';
import cn from 'clsx';
import { InteractiveCopybutton, InteractiveCopyLinkButton } from './InteractiveCopyButton';
import { PromptAttributes } from '@/components/prompt-attributes/PromptAttribute';
import { databases } from '@/util/appwrite';


export interface IFeaturePrompt {
  title: string;
  date: Date;
  author: string;
  prompt: string;
}

export async function randomFeaturePrompt() {
  return {
    title: faker.lorem.sentence(),
    date: faker.date.past(),
    author: faker.internet.username(),
    prompt: faker.lorem.paragraph()
  } as IFeaturePrompt;
}

async function getPrompt(id: string) {
  const { title, created_at, content: prompt } = await databases.getDocument(
    process.env.APPWRITE_DATABASE_ID!,
    process.env.APPWRITE_PROMPT_COLLECTION_ID!,
    id,
    [],
  );

  return {
    title, date: new Date(created_at), prompt, author: 'Samy!!'
  } satisfies IFeaturePrompt;
}

export default async function Prompt({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  console.log(slug);

  const prompt = await getPrompt(slug);

  console.log(prompt);

  return (
    <>
      <div className="space-y-2">
        <h1
          className={cn(
            'w-full text-2xl font-medium',
          )}
        >
          {prompt.title}
        </h1>
        <PromptAttributes date={prompt.date} author={prompt.author} className="flex gap-2" />
      </div>
      <article className="space-y-2">
        <div className="flex w-full items-center justify-between px-1">
          <InteractiveCopyLinkButton />
          <Button label="Fork/Edit" variant='text' />
        </div>
        <p
          className={cn(
            'w-full h-fit p-5 rounded-xl ring-1 ring-bland-200 text-bland-950 bg-bland-50'
          )}>
          {prompt.prompt}
        </p>
        <InteractiveCopybutton prompt={prompt} />
      </article>
    </>
  );
}

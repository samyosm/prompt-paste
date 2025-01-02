import {PromptCard} from '@/components/prompt-card/PromptCard';
import {databases} from '@/util/appwrite';
import {Query} from 'appwrite';

async function fetchPrompts({limit, lastId}: {limit: number; lastId?: string}) {
  const query = [Query.limit(limit)];

  if (lastId) {
    query.push(Query.cursorAfter(lastId));
  }

  const {documents} = await databases.listDocuments(
    process.env.APPWRITE_DATABASE_ID!,
    process.env.APPWRITE_PROMPT_COLLECTION_ID!,
    query,
  );

  return {
    prompts: documents,
    lastId: documents[documents.length - 1]?.$id,
  };
}

export interface IPromptListing {
  searchParams?: string;
}

export async function PromptListing({searchParams}: IPromptListing) {
  const {prompts} = await fetchPrompts({limit: 25});
  const search = new URLSearchParams(searchParams);

  console.log(search.get('query'));

  return (
    <>
      {prompts.map(prompt => (
        <PromptCard
          href={prompt.$id}
          key={prompt.$id}
          author={prompt.author}
          date={new Date(prompt.created_at)}
          title={prompt.title}
        />
      ))}
    </>
  );
}

import {PromptCard} from '@/components/prompt-card/PromptCard';
import {databases} from '@/util/appwrite';
import {Query} from 'appwrite';

async function fetchPrompts({
  limit,
  offset,
  search = '',
}: {
  limit: number;
  offset?: number;
  search?: string;
}) {
  const query = [
    Query.limit(limit),
    Query.contains('title', search),
    Query.orderDesc('created_at'),
  ];

  if (offset) {
    query.push(Query.offset(offset));
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
  searchParams?: {
    query: string;
    p: string;
  };
}

export async function PromptListing({searchParams}: IPromptListing) {
  const {prompts} = await fetchPrompts({
    limit: 20,
    search: searchParams?.query,
    offset: Number(searchParams?.p) * 20,
  });

  console.log(searchParams);

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

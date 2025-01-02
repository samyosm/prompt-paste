import {SubmitButton} from '@/components/button/SubmitButton';
import {Textarea} from '@/components/textarea/Textarea';
import {databases, ID} from '@/util/appwrite';
import cn from 'clsx';
import {redirect} from 'next/navigation';
import {useId} from 'react';

async function handleForm(formData: FormData) {
  'use server';
  console.log(formData);

  const title = formData.get('title')?.toString().trim();
  const content = formData.get('prompt');
  const created_at = new Date();

  const document = await databases.createDocument(
    process.env.APPWRITE_DATABASE_ID!,
    process.env.APPWRITE_PROMPT_COLLECTION_ID!,
    ID.unique(),
    {
      title,
      content,
      created_at,
    },
  );

  redirect(`/${document.$id}`);
}

// TODO: Add ReCaptcha
export default async function Home() {
  const formId = useId();

  return (
    <>
      <div className="space-y-2">
        <input
          form={formId}
          className={cn(
            'w-full border-b border-b-bland-200 text-2xl font-medium outline-hidden',
          )}
          placeholder="Untitled"
          name="title"
        />
        <p className="">By @Samy - Now</p>
      </div>
      <form id={formId} className="space-y-2" action={handleForm}>
        <Textarea autoResize name="prompt" placeholder="Write prompt here..." />
        <SubmitButton
          pendingLabel="Pending..."
          label="Save"
          variant="filled"
          className="w-full justify-center"
        />
      </form>
    </>
  );
}

import {Button} from '@/components/button/Button';
import {Textarea} from '@/components/textarea/Textarea';
import cn from 'clsx';

import {HiPaperAirplane as SaveIcon} from 'react-icons/hi2';

export default async function Home() {
  async function handleForm(formData: FormData) {
    'use server';
    console.log(formData);
  }

  return (
    <>
      <div className="space-y-2">
        <input
          className={cn(
            'w-full border-b border-b-bland-200 text-2xl font-medium outline-hidden',
          )}
          placeholder="Untitled"
        />
        <p className="">By @Samy - Now</p>
      </div>
      <form className="space-y-2" action={handleForm}>
        <Textarea autoResize name="prompt" placeholder="Write prompt here..." />
        <Button
          type="submit"
          label="Save"
          RightIcon={() => (
            <SaveIcon className="transition-transform duration-200 group-hover:translate-x-1" />
          )}
          variant="filled"
          className="w-full justify-center"
        />
      </form>
    </>
  );
}
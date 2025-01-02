'use client'
import { IFeaturePrompt } from './page';
import { Button } from '@/components/button/Button';
import { toast } from 'sonner';

import { HiClipboard as CopyIcon } from 'react-icons/hi2';

export function InteractiveCopybutton({ prompt }: { prompt: IFeaturePrompt }) {
  function handleClick() {
    navigator.clipboard.writeText(prompt.prompt);
    toast.success('Successfully copied!');
  }

  return (
    <Button
      onClick={handleClick}
      label="Copy"
      RightIcon={() => (
        <CopyIcon className="transition-transform duration-200 group-hover:translate-x-1" />
      )}
      variant="filled"
      className="w-full justify-center"
    />

  )
}


export function InteractiveCopyLinkButton() {
  const url = window.location;
  function handleClick() {
    navigator.clipboard.writeText(url.toString());
    toast.success('Successfully copied!');
  }

  return (
    <Button label="Copy Link" variant='text' onClick={handleClick} />
  )
}

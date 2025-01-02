import {Input} from '@/components/input/Input';
import {
  PromptCard,
  randomPromptCard,
} from '@/components/prompt-card/PromptCard';

export async function PromptCatalog({}) {
  const prompts = Array.from({length: 30}, () => randomPromptCard());

  return (
    <div className="mx-4 flex size-full max-w-xl flex-col gap-2 overflow-y-auto p-1 scrollbar-thin">
      <Input className="" type="search" name="search" placeholder="Search" />
      <section className="grid grid-cols-2 gap-2">
        {prompts.map(prompt => (
          <PromptCard key={prompt.title} {...prompt} />
        ))}
      </section>
    </div>
  );
}

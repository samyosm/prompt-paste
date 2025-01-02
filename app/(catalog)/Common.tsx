import {PromptCatalog} from '../PromptCatalog';
import {PromptListing} from '../PromptListing';

export interface ILayout {
  children: React.ReactNode;
  searchParams?: {
    query: string;
    p: string;
  };
}

export default async function Common({children, searchParams}: ILayout) {
  return (
    <div className="flex size-full min-w-content overflow-hidden">
      <PromptCatalog>
        <PromptListing searchParams={searchParams} />
      </PromptCatalog>
      <main className="w-full">
        <div className="mt-1 size-full rounded-tl-xl bg-white ring-1 ring-bland-200">
          <section className="mx-auto w-full max-w-3xl space-y-8 pt-14 px-5">
            {children}
          </section>
        </div>
      </main>
    </div>
  );
}

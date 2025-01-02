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
    <div className="flex flex-col-reverse lg:flex-row size-full min-w-content overflow-hidden gap-5 lg:gap-0">
      <PromptCatalog>
        <PromptListing searchParams={searchParams} />
      </PromptCatalog>
      {/*TODO: Remove flex on xl*/}
      <main className="lg:w-full flex">
        <div className="lg:mt-1 size-full rounded-xl lg:rounded-none lg:rounded-tl-xl bg-white ring-1 ring-bland-200 mx-5 lg:m-2">
          <section className="mx-auto w-full max-w-3xl space-y-8 py-5 lg:pt-14 px-5">
            {children}
          </section>
        </div>
      </main>
    </div>
  );
}

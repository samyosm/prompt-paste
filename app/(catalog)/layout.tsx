import {PromptCatalog} from '../PromptCatalog';

export default async function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex h-full overflow-hidden">
      <aside className="h-full">
        <PromptCatalog />
      </aside>
      <main className="flex-1">
        <div className="mt-1 size-full rounded-tl-xl bg-white ring-1 ring-bland-200">
          <section className="mx-auto w-full max-w-3xl space-y-8 pt-14">
            {children}
          </section>
        </div>
      </main>
    </div>
  );
}

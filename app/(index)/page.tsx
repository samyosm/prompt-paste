import {MainContent} from './MainContent';
import {PromptCatalog} from './PromptCatalog';

export default async function Home() {
  return (
    <div className="flex h-full overflow-hidden">
      <aside className="h-full">
        <PromptCatalog />
      </aside>
      <main className="flex-1">
        <MainContent />
      </main>
    </div>
  );
}

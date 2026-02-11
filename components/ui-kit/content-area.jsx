"use client";

import ButtonDoc from "@/components/ui-kit/docs/button-doc";
import ThemeSwitcher from "@/components/ui-kit/theme-switcher";

const docs = {
  button: ButtonDoc,
};

export default function ContentArea({ activeComponent }) {
  const Doc = docs[activeComponent];

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <header className="flex h-14 shrink-0 items-center justify-end border-b border-border bg-background px-6">
        <ThemeSwitcher />
      </header>

      {!Doc ? (
        <div className="flex flex-1 items-center justify-center text-sm text-muted-foreground">
          Select a component from the sidebar.
        </div>
      ) : (
        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-3xl px-8 py-10">
            <Doc />
          </div>
        </main>
      )}
    </div>
  );
}

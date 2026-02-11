"use client";

import ButtonDoc from "@/components/ui-kit/docs/button-doc";

const docs = {
  button: ButtonDoc,
};

export default function ContentArea({ activeComponent }) {
  const Doc = docs[activeComponent];

  if (!Doc) {
    return (
      <div className="flex flex-1 items-center justify-center text-sm text-muted-foreground">
        Select a component from the sidebar.
      </div>
    );
  }

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="mx-auto max-w-3xl px-8 py-10">
        <Doc />
      </div>
    </main>
  );
}

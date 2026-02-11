"use client";

const components = [
  { id: "button", label: "Button" },
];

export default function Sidebar({ activeComponent, onSelect }) {
  return (
    <aside className="flex w-60 shrink-0 flex-col border-r border-border bg-background">
      <div className="flex h-14 items-center border-b border-border px-5">
        <h1 className="text-sm font-semibold tracking-tight text-foreground">
          UI Kit
        </h1>
      </div>
      <nav className="flex flex-col gap-1 p-3" aria-label="Component list">
        {components.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            className={[
              "flex items-center rounded-[var(--radius)] px-3 py-2 text-sm font-medium transition-colors text-left cursor-pointer",
              activeComponent === item.id
                ? "bg-muted text-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            ].join(" ")}
            aria-current={activeComponent === item.id ? "page" : undefined}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}

export { components };

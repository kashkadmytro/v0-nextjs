export default function PreviewBox({ title, children }) {
  return (
    <div className="flex flex-col gap-2">
      {title && (
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
      )}
      <div className="flex flex-wrap items-center gap-3 rounded-[var(--radius)] border border-border bg-muted/40 p-6">
        {children}
      </div>
    </div>
  );
}

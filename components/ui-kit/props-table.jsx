export default function PropsTable({ props }) {
  return (
    <div className="overflow-x-auto rounded-[var(--radius)] border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-muted">
            <th className="px-4 py-2.5 text-left font-medium text-foreground">
              Prop
            </th>
            <th className="px-4 py-2.5 text-left font-medium text-foreground">
              Type
            </th>
            <th className="px-4 py-2.5 text-left font-medium text-foreground">
              Default
            </th>
            <th className="px-4 py-2.5 text-left font-medium text-foreground">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop, i) => (
            <tr
              key={prop.name}
              className={i < props.length - 1 ? "border-b border-border" : ""}
            >
              <td className="px-4 py-2.5 font-mono text-xs text-accent">
                {prop.name}
              </td>
              <td className="px-4 py-2.5 font-mono text-xs text-muted-foreground">
                {prop.type}
              </td>
              <td className="px-4 py-2.5 font-mono text-xs text-muted-foreground">
                {prop.default}
              </td>
              <td className="px-4 py-2.5 text-muted-foreground">
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

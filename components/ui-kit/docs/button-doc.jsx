import { Button } from "@/components/ui/button";
import PropsTable from "@/components/ui-kit/props-table";
import PreviewBox from "@/components/ui-kit/preview-box";

const buttonProps = [
  {
    name: "variant",
    type: '"primary" | "secondary" | "outline" | "ghost" | "destructive" | "link"',
    default: '"primary"',
    description: "Visual style of the button.",
  },
  {
    name: "size",
    type: '"sm" | "md" | "lg"',
    default: '"md"',
    description: "Controls the height and padding of the button.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "When true, prevents interaction and reduces opacity.",
  },
  {
    name: "children",
    type: "ReactNode",
    default: "\u2014",
    description: "The content rendered inside the button.",
  },
  {
    name: "className",
    type: "string",
    default: '""',
    description: "Additional CSS classes to merge with defaults.",
  },
];

export default function ButtonDoc() {
  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground text-balance">
          Button
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground max-w-2xl">
          A versatile button component that supports multiple visual variants
          and sizes. It forwards refs and spreads all native button attributes,
          making it easy to integrate with forms and event handlers.
        </p>
      </div>

      {/* Usage */}
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">Usage</h3>
        <pre className="overflow-x-auto rounded-[var(--radius)] bg-muted p-4 font-mono text-xs leading-relaxed text-foreground">
          <code>{`import { Button } from "@/components/ui/button";

<Button variant="primary" size="md">
  Click me
</Button>`}</code>
        </pre>
      </div>

      {/* Props */}
      <div className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold text-foreground">Props</h3>
        <PropsTable props={buttonProps} />
      </div>

      {/* Variants */}
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-semibold text-foreground">Variants</h3>
        <PreviewBox title="All variants">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </PreviewBox>
      </div>

      {/* Sizes */}
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-semibold text-foreground">Sizes</h3>
        <PreviewBox title="Small / Medium / Large">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </PreviewBox>
      </div>

      {/* States */}
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-semibold text-foreground">States</h3>
        <PreviewBox title="Disabled">
          <Button disabled>Disabled primary</Button>
          <Button variant="outline" disabled>
            Disabled outline
          </Button>
          <Button variant="destructive" disabled>
            Disabled destructive
          </Button>
        </PreviewBox>
      </div>
    </div>
  );
}

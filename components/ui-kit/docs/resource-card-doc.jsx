import { ResourceCard } from "@/components/ui/resource-card";
import PropsTable from "@/components/ui-kit/props-table";
import PreviewBox from "@/components/ui-kit/preview-box";

const resourceCardProps = [
  {
    name: "imageSrc",
    type: "string",
    default: "undefined",
    description: "URL of the card image. Shows a placeholder when empty.",
  },
  {
    name: "imageAlt",
    type: "string",
    default: '""',
    description: "Alt text for the card image.",
  },
  {
    name: "title",
    type: "string",
    default: "\u2014",
    description: "The title displayed below the image.",
  },
  {
    name: "onView",
    type: "() => void",
    default: "undefined",
    description: "Callback fired when the View button is clicked.",
  },
  {
    name: "className",
    type: "string",
    default: '""',
    description: "Additional CSS classes to merge with defaults.",
  },
];

export default function ResourceCardDoc() {
  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground text-balance">
          ResourceCard
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground max-w-2xl">
          A card component for displaying a resource with an image, title, and a
          primary View button. The card has a slate-200 border and gains a
          medium shadow on hover for visual feedback.
        </p>
      </div>

      {/* Usage */}
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">Usage</h3>
        <pre className="overflow-x-auto rounded-[var(--radius)] bg-muted p-4 font-mono text-xs leading-relaxed text-foreground">
          <code>{`import { ResourceCard } from "@/components/ui/resource-card";

<ResourceCard
  imageSrc="/path/to/image.jpg"
  imageAlt="Resource preview"
  title="My Resource"
  onView={() => console.log("View clicked")}
/>`}</code>
        </pre>
      </div>

      {/* Props */}
      <div className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold text-foreground">Props</h3>
        <PropsTable props={resourceCardProps} />
      </div>

      {/* Preview: With Image */}
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-semibold text-foreground">Preview</h3>
        <PreviewBox title="With image">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <ResourceCard
              imageSrc="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=250&fit=crop"
              imageAlt="Mountain landscape"
              title="Mountain Landscape"
              onView={() => {}}
            />
            <ResourceCard
              imageSrc="https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?w=400&h=250&fit=crop"
              imageAlt="City skyline"
              title="City Skyline at Sunset"
              onView={() => {}}
            />
          </div>
        </PreviewBox>
      </div>

      {/* Preview: Without Image */}
      <div className="flex flex-col gap-4">
        <PreviewBox title="Without image (placeholder)">
          <div className="w-full max-w-xs">
            <ResourceCard
              title="Resource Without Image"
              onView={() => {}}
            />
          </div>
        </PreviewBox>
      </div>
    </div>
  );
}

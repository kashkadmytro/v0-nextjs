"use client";

import { forwardRef } from "react";
import { Button } from "@/components/ui/button";

const ResourceCard = forwardRef(function ResourceCard(
  {
    imageSrc,
    imageAlt = "",
    title,
    onView,
    className = "",
    ...props
  },
  ref
) {
  return (
    <div
      ref={ref}
      className={[
        "flex flex-col overflow-hidden rounded-[var(--radius)] border border-slate-200 bg-background transition-shadow hover:shadow-md",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
            No image
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3 p-4">
        <h3 className="text-sm font-semibold text-foreground leading-relaxed text-pretty">
          {title}
        </h3>
        <Button variant="primary" size="md" onClick={onView}>
          View
        </Button>
      </div>
    </div>
  );
});

ResourceCard.displayName = "ResourceCard";

export { ResourceCard };

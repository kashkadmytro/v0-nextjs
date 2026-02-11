"use client";

import { useState } from "react";
import Sidebar from "@/components/ui-kit/sidebar";
import ContentArea from "@/components/ui-kit/content-area";

export default function UiKitPage() {
  const [activeComponent, setActiveComponent] = useState("button");

  return (
    <div className="flex h-screen overflow-hidden bg-background font-sans">
      <Sidebar
        activeComponent={activeComponent}
        onSelect={setActiveComponent}
      />
      <ContentArea activeComponent={activeComponent} />
    </div>
  );
}

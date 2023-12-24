import React from "react";
import useDesigner from "./hooks/useDesigner";
import { FormElements } from "./FormElements";

function PropertiesFormSidebar() {
  const { selectedElement } = useDesigner();
  if (!selectedElement) return null;
  const PropertiesForm = FormElements[selectedElement?.type].formComponent;
  return (
    <div className="flex flex-col p-2">
      <div className="flex justify-between items-center">
        <p className="text-sm text-foreground/70">Element properties</p>
      </div>
      <PropertiesForm />
    </div>
  );
}

export default PropertiesFormSidebar;

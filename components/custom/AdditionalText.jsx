import React from "react";
import { Textarea } from "../ui/textarea";

const AdditionalText = () => {
  return (
    <div>
      <span className="text-slate-400 mt-4">Additional requirements*</span>

      <Textarea placeholder="add aditional requirements..." />
    </div>
  );
};

export default AdditionalText;

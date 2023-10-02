import React from "react";
import { Card } from "@material-tailwind/react";
import { Pricing } from "@/widgets/layout";

export function Billing() {
  return (
    <div>
      <Card>
        <Pricing />
      </Card>
    </div>
  );
}

export default Billing;

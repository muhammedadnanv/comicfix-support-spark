import React from 'react';
import { Badge as UIBadge } from "@/components/ui/badge";

const Badge = ({ icon, name }) => (
  <UIBadge variant="outline" className="text-lg p-2 text-golden border-golden">
    {icon} {name}
  </UIBadge>
);

export default Badge;
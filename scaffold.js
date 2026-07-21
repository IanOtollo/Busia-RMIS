const fs = require('fs');
const path = require('path');

const routes = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Customers", href: "/customers" },
  { name: "Single Business Permits", href: "/sbp" },
  { name: "Devolved Units", href: "/devolved-units" },
  { name: "Liquor Permits", href: "/liquor" },
  { name: "Fire Licenses", href: "/fire" },
  { name: "Public Health", href: "/public-health" },
  { name: "Hospital Bills (HMIS)", href: "/hmis" },
  { name: "Land", href: "/land" },
  { name: "House/Stall (Rent)", href: "/rent" },
  { name: "Street Parking", href: "/parking" },
  { name: "Bus Park", href: "/bus-park" },
  { name: "Sacco Management", href: "/sacco" },
  { name: "Unstructured Revenue", href: "/unstructured" },
  { name: "Physical Planning", href: "/physical-planning" },
  { name: "Water Management", href: "/water" },
  { name: "Fishery", href: "/fishery" },
  { name: "Demand Notice", href: "/demand-notice" },
  { name: "Cashier", href: "/cashier" },
  { name: "Reconciliation", href: "/reconciliation" },
  { name: "Reports", href: "/reports" },
  { name: "User Management", href: "/users" },
  { name: "Approvals", href: "/approvals" },
  { name: "POS AppStore", href: "/pos" },
  { name: "Settings", href: "/settings" },
  { name: "Support", href: "/support" },
  { name: "Audit Trail", href: "/audit-trail" }
];

const template = (title) => `
import { FileText } from "lucide-react";

export default function Page() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground tracking-tight">${title}</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Manage ${title.toLowerCase()} and related operations.
          </p>
        </div>
      </div>
      
      <div className="card-formal flex min-h-[400px] flex-col items-center justify-center p-8 text-center">
        <div className="mb-4 rounded-full bg-secondary p-4 text-primary">
          <FileText size={32} />
        </div>
        <h3 className="mb-2 text-lg font-medium text-foreground">No records found</h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          There are currently no records available in this module. New entries will appear here once they are registered.
        </p>
      </div>
    </div>
  );
}
`;

routes.forEach(route => {
  const dirPath = path.join(__dirname, 'src', 'app', '(dashboard)', route.href);
  fs.mkdirSync(dirPath, { recursive: true });
  fs.writeFileSync(path.join(dirPath, 'page.tsx'), template(route.name).trim());
});

console.log('Scaffolding complete.');

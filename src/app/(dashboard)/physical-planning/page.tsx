import { FileText } from "lucide-react";

export default function Page() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground tracking-tight">Physical Planning</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Manage physical planning and related operations.
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
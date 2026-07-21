import { LineChart, BarChart3, PieChart, Activity } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            Analytics
          </h1>
          <p className="text-muted-foreground">
            Detailed performance metrics and statistical analysis.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="inline-flex items-center justify-center rounded-lg border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary">
            Export Report
          </button>
          <button className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90">
            Generate Insights
          </button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="card-formal p-6 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            <LineChart size={18} />
            <span className="text-sm font-medium">Revenue Trends</span>
          </div>
          <span className="text-2xl font-bold">No Data</span>
        </div>
        <div className="card-formal p-6 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            <BarChart3 size={18} />
            <span className="text-sm font-medium">Collection Rates</span>
          </div>
          <span className="text-2xl font-bold">No Data</span>
        </div>
        <div className="card-formal p-6 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            <PieChart size={18} />
            <span className="text-sm font-medium">Distribution</span>
          </div>
          <span className="text-2xl font-bold">No Data</span>
        </div>
        <div className="card-formal p-6 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Activity size={18} />
            <span className="text-sm font-medium">Active Users</span>
          </div>
          <span className="text-2xl font-bold">No Data</span>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="card-formal p-8 min-h-[300px] flex flex-col items-center justify-center text-center">
          <div className="rounded-full bg-secondary/50 p-4 mb-4">
            <LineChart className="h-8 w-8 text-muted-foreground/50" />
          </div>
          <h3 className="text-lg font-medium text-foreground mb-1">Growth Analytics</h3>
          <p className="text-sm text-muted-foreground max-w-sm mx-auto">
            Historical growth charts are currently unavailable. No data points have been recorded yet.
          </p>
        </div>
        <div className="card-formal p-8 min-h-[300px] flex flex-col items-center justify-center text-center">
          <div className="rounded-full bg-secondary/50 p-4 mb-4">
            <BarChart3 className="h-8 w-8 text-muted-foreground/50" />
          </div>
          <h3 className="text-lg font-medium text-foreground mb-1">Performance by Category</h3>
          <p className="text-sm text-muted-foreground max-w-sm mx-auto">
            Category breakdown requires active transaction data.
          </p>
        </div>
      </div>
    </div>
  );
}

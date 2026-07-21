"use client";

import { CalendarCheck, CalendarDays, Calendar } from "lucide-react";

export default function DashboardPage() {
  const streams: any[] = []; // Intentionally left empty as per no-mock-data rule

  return (
    <div className="space-y-6">
      {/* 3 Revenue Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card-formal p-6 flex items-center justify-between">
          <div className="rounded-lg p-3 text-emerald-500 border-2 border-emerald-500/20">
            <CalendarCheck size={32} strokeWidth={1.5} />
          </div>
          <div className="text-right">
            <h3 className="text-sm text-muted-foreground">Today's Revenue</h3>
            <span className="text-2xl font-light text-foreground">Ksh 0.0</span>
          </div>
        </div>

        <div className="card-formal p-6 flex items-center justify-between">
          <div className="rounded-lg p-3 text-amber-500 border-2 border-amber-500/20">
            <CalendarDays size={32} strokeWidth={1.5} />
          </div>
          <div className="text-right">
            <h3 className="text-sm text-muted-foreground">Week's Revenue</h3>
            <span className="text-2xl font-light text-foreground">Ksh 0.0</span>
          </div>
        </div>

        <div className="card-formal p-6 flex items-center justify-between">
          <div className="rounded-lg p-3 text-sky-500 border-2 border-sky-500/20">
            <Calendar size={32} strokeWidth={1.5} />
          </div>
          <div className="text-right">
            <h3 className="text-sm text-muted-foreground">Month's Revenue</h3>
            <span className="text-2xl font-light text-foreground">Ksh 0.0</span>
          </div>
        </div>
      </div>

      {/* Custom Date Filter */}
      <div className="card-formal p-6">
        <h3 className="text-[15px] font-medium text-foreground mb-4">Custom Date and Time Range</h3>
        <div className="flex flex-col sm:flex-row items-end gap-6 max-w-4xl">
          <div className="flex-1 w-full">
            <label className="text-[13px] text-muted-foreground mb-2 block">Select start date</label>
            <input 
              type="datetime-local" 
              className="w-full border rounded text-sm p-2 bg-transparent outline-none focus:border-primary transition-colors text-muted-foreground" 
            />
          </div>
          <div className="flex-1 w-full">
            <label className="text-[13px] text-muted-foreground mb-2 block">Select end date</label>
            <input 
              type="datetime-local" 
              className="w-full border rounded text-sm p-2 bg-transparent outline-none focus:border-primary transition-colors text-muted-foreground" 
            />
          </div>
          <button className="bg-secondary/80 text-foreground text-sm font-medium px-8 py-2.5 rounded hover:bg-secondary transition-colors whitespace-nowrap">
            Apply
          </button>
        </div>
        <div className="mt-6 text-sm text-muted-foreground">-- Ksh 0.0</div>
      </div>

      {/* Revenue Streams Table */}
      <div className="card-formal p-6">
        <h3 className="text-xl font-light text-muted-foreground mb-1">Revenue Streams Income</h3>
        <p className="text-[13px] text-muted-foreground/70 mb-6">Today vs Yesterday comparison</p>
        
        <div className="h-[300px] overflow-y-auto border-t">
          {streams.length === 0 ? (
            <div className="py-12 flex flex-col items-center justify-center text-muted-foreground/50">
              <p className="text-sm">No revenue streams data available</p>
            </div>
          ) : (
            <table className="w-full text-left text-sm">
              <tbody className="divide-y">
                {streams.map((stream, idx) => (
                  <tr key={idx} className="hover:bg-secondary/20 transition-colors">
                    <td className="py-4 px-2 text-foreground">{stream.name}</td>
                    <td className="py-4 px-2 text-right text-muted-foreground">{stream.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
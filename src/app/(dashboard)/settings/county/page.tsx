"use client";

import { useState } from "react";
import { Plus, Edit, Trash, Target } from "lucide-react";
import Link from "next/link";

export default function SubCountiesPage() {
  // STRICTLY NO MOCK DATA
  const [subCounties, setSubCounties] = useState<any[]>([]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
            <Link href="/settings" className="hover:text-foreground transition-colors">
              Settings
            </Link>
            <span>/</span>
            <Link href="/settings/county" className="hover:text-foreground transition-colors">
              County
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">SubCounties</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            SubCounties Targets
          </h1>
        </div>
        <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90">
          <Plus size={16} />
          Add SubCounty
        </button>
      </div>

      {/* Table */}
      <div className="card-formal overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-secondary/50 text-muted-foreground">
              <tr>
                <th className="px-6 py-4 font-semibold">Title</th>
                <th className="px-6 py-4 font-semibold">Code</th>
                <th className="px-6 py-4 font-semibold">Daily Target Amount</th>
                <th className="px-6 py-4 font-semibold">Weekly Target Amount</th>
                <th className="px-6 py-4 font-semibold">Monthly Target Amount</th>
                <th className="px-6 py-4 font-semibold">Yearly Target Amount</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {subCounties.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center text-muted-foreground">
                    <div className="flex flex-col items-center justify-center space-y-3">
                      <Target size={32} className="text-muted-foreground/50" />
                      <p>No subcounty targets available.</p>
                    </div>
                  </td>
                </tr>
              ) : (
                subCounties.map((item, index) => (
                  <tr key={index} className="transition-colors hover:bg-secondary/20">
                    <td className="px-6 py-4">{item.title}</td>
                    <td className="px-6 py-4">{item.code}</td>
                    <td className="px-6 py-4">{item.daily}</td>
                    <td className="px-6 py-4">{item.weekly}</td>
                    <td className="px-6 py-4">{item.monthly}</td>
                    <td className="px-6 py-4">{item.yearly}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="inline-flex items-center justify-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-primary hover:bg-primary/10 transition-colors">
                          <Target size={14} />
                          Add Targets
                        </button>
                        <button className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors">
                          <Edit size={16} />
                        </button>
                        <button className="inline-flex h-8 w-8 items-center justify-center rounded-md text-destructive hover:bg-destructive/10 transition-colors">
                          <Trash size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

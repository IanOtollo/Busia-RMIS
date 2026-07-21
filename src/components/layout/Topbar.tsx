"use client";

import { usePathname } from "next/navigation";
import { ChevronRight, ChevronDown, User } from "lucide-react";

export default function Topbar() {
  const pathname = usePathname();
  
  // Basic breadcrumb generation from pathname
  const paths = pathname.split("/").filter(Boolean);
  
  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b bg-white px-6">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground hidden sm:flex">
        <span className="font-medium text-foreground">Home</span>
        {paths.map((path, index) => (
          <div key={path} className="flex items-center gap-2">
            <ChevronRight size={16} />
            <span className={index === paths.length - 1 ? "font-medium text-foreground capitalize" : "capitalize"}>
              {path.replace("-", " ")}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-6 ml-auto">
        {/* User Profile */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-primary">
            <User size={18} />
          </div>
          <div className="hidden flex-col md:flex">
            <span className="text-sm font-semibold text-foreground">User</span>
          </div>
          <ChevronDown size={16} className="text-muted-foreground hidden md:block" />
        </div>
      </div>
    </header>
  );
}

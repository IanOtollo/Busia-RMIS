"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Briefcase,
  Landmark,
  Wine,
  Flame,
  Stethoscope,
  Building2,
  Map,
  Home,
  Car,
  Bus,
  CarFront,
  Coins,
  MapPin,
  Droplet,
  Anchor,
  Bell,
  Headset,
  User,
  CreditCard,
  FileCheck,
  BarChart2,
  FileText,
  UserCog,
  Stamp,
  CheckCircle,
  Smartphone,
  Sliders,
  HelpCircle,
  Search,
  Menu,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";

type NavChild = {
  name: string;
  href?: string;
  initials?: string;
  icon?: any;
  isHeader?: boolean;
  children?: NavChild[];
};

type NavItem = {
  name: string;
  href: string;
  icon: any;
  children?: NavChild[];
};

const navItems: NavItem[] = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    children: [
      { name: "Analytics", href: "/dashboard/analytics", initials: "AD" },
      { name: "Overview", href: "/dashboard", initials: "OD" },
      { name: "Executive", href: "/dashboard/executive", initials: "ED" },
      { name: "G.I.S", href: "/dashboard/gis", initials: "G" },
    ],
  },
  {
    name: "Customers",
    href: "/customers",
    icon: Users,
    children: [
      { name: "Register New Customer", href: "/customers/register", initials: "RC" },
      { name: "Active Customers", href: "/customers", initials: "LC" },
      { name: "Edited Customers", href: "/customers/edited", initials: "EC" },
      { name: "Assign Bank Slip", href: "/customers/assign-bank", initials: "AB" },
      { name: "Assign Mpesa Deposits", href: "/customers/assign-mpesa", initials: "AMD" },
      { name: "Assign Bills", href: "/customers/assign-bills", initials: "AB" },
      { name: "Wallet Profile", href: "/customers/wallet", initials: "WP" },
    ],
  },
  {
    name: "Single Business Permits",
    href: "/sbp",
    icon: Briefcase,
    children: [
      { name: "Register", href: "/sbp/register", initials: "R" },
      { name: "Renew", href: "/sbp/renew", initials: "R" },
      { name: "Download Permit", href: "/sbp/download", initials: "DP" },
      { name: "Bills", href: "/sbp/bills", initials: "B" },
      { name: "Receipts", href: "/sbp/receipts", initials: "R" },
      { name: "Business Details", href: "/sbp/details", initials: "BD" },
      { name: "Approvals", href: "/sbp/approvals", initials: "A" },
      { name: "Edit Approvals", href: "/sbp/edit-approvals", initials: "EA" },
    ],
  },
  {
    name: "Devolved Units",
    href: "/devolved-units",
    icon: Landmark,
    children: [
      { name: "License Permits", href: "/devolved-units/license", initials: "LP" },
      { name: "Coffee Permits", href: "/devolved-units/coffee", initials: "CP" },
      { name: "Bills", href: "/devolved-units/bills", initials: "B" },
      { name: "Payments", href: "/devolved-units/payments", initials: "P" },
      { name: "Permits", href: "/devolved-units/permits", initials: "P" },
      { name: "Fire Licence Permit", href: "/devolved-units/fire", initials: "FLP" },
    ],
  },
  {
    name: "Liquor Permits",
    href: "/liquor",
    icon: Wine,
    children: [
      { name: "Register", href: "/liquor/register", initials: "R" },
      { name: "Temporary", href: "/liquor/temporary", initials: "T" },
      { name: "Liquor Permits", href: "/liquor/permits", initials: "LP" },
      { name: "Bills", href: "/liquor/bills", initials: "B" },
      { name: "Permit Payments", href: "/liquor/payments", initials: "PP" },
      { name: "Liquor Inspection", href: "/liquor/inspection", initials: "LI" },
    ],
  },
  {
    name: "Fire Licenses",
    href: "/fire",
    icon: Flame,
    children: [
      { name: "Register", href: "/fire/register", initials: "R" },
      { name: "License Approvals", href: "/fire/approvals", initials: "LA" },
      { name: "License Bills", href: "/fire/bills", initials: "FLB" },
      { name: "License Payments", href: "/fire/payments", initials: "FLP" },
      { name: "Download Fire License", href: "/fire/download", initials: "DFL" },
    ],
  },
  {
    name: "Public Health",
    href: "/public-health",
    icon: Stethoscope,
    children: [
      { name: "Register", href: "/public-health/register", initials: "R" },
      { name: "Medical Certificates", href: "/public-health/certificates", initials: "MC" },
      { name: "Public Health Permits", href: "/public-health/permits", initials: "PHP" },
      { name: "Individual Certificates", href: "/public-health/individual", initials: "IC" },
      { name: "Bulk Certificates", href: "/public-health/bulk", initials: "BC" },
      { name: "Manage Employees", href: "/public-health/employees", initials: "ME" },
      { name: "Bills", href: "/public-health/bills", initials: "B" },
      { name: "Health Permit Payments", href: "/public-health/payments", initials: "HP" },
      { name: "Public Health Inspection", href: "/public-health/inspections", initials: "PH" },
    ],
  },
  {
    name: "Hospital Bills",
    href: "/hmis",
    icon: Building2,
    children: [
      { name: "Get Bill", href: "/hmis/get-bill", initials: "GB" },
    ]
  },
  {
    name: "Land",
    href: "/land",
    icon: Map,
    children: [
      { name: "Register New Property", href: "/land/register", initials: "RP" },
      { name: "Properties", href: "/land/properties", initials: "P" },
      { name: "clearance Certificates", href: "/land/clearance", initials: "CLC" },
      { name: "LAND BILLS", isHeader: true },
      { name: "Get Bill", href: "/land/bills/get", initials: "GB" },
      { name: "Statement", href: "/land/bills/statement", initials: "S" },
      { name: "Adjust Arrears", href: "/land/bills/adjust", initials: "AA" },
      { name: "Adjustment Requests", href: "/land/bills/requests", initials: "AR" },
    ]
  },
  {
    name: "House/Stall",
    href: "/rent",
    icon: Home,
    children: [
      { name: "HOUSE MANAGEMENT", isHeader: true },
      { name: "Rent", href: "/rent/house/rent", initials: "R" },
      { name: "Create", href: "/rent/house/create", initials: "C" },
      { name: "List", href: "/rent/house/list", initials: "L" },
      { name: "Statements", href: "/rent/house/statements", initials: "S" },
      { name: "Lock", href: "/rent/house/lock", initials: "L" },
      { name: "STALL MANAGEMENT", isHeader: true },
      { name: "Rent", href: "/rent/stall/rent", initials: "R" },
      { name: "Create", href: "/rent/stall/create", initials: "C" },
      { name: "List", href: "/rent/stall/list", initials: "L" },
      { name: "Statements", href: "/rent/stall/statements", initials: "S" },
      { name: "Lock", href: "/rent/stall/lock", initials: "L" },
      { name: "RENT ADJUSTMENTS", isHeader: true },
      { name: "Adjustments", href: "/rent/adjustments", initials: "A" },
    ]
  },
  {
    name: "Street Parking",
    href: "/parking",
    icon: Car,
    children: [
      { name: "Daily Parking", href: "/parking/daily", initials: "DP" },
      { name: "Seasonal Parking", href: "/parking/seasonal", initials: "SP" },
      { name: "Seasonal Stickers", href: "/parking/stickers", initials: "SS" },
      { name: "Check Bill", href: "/parking/check", initials: "CB" },
      { name: "Parking Bills", href: "/parking/bills", initials: "PB" },
    ]
  },
  {
    name: "Bus Park",
    href: "/bus-park",
    icon: Bus,
    children: [
      { name: "Trip Parking", href: "/bus-park/trip", initials: "TP" },
      { name: "Sacco Self Service", href: "/bus-park/sacco", initials: "SS" },
    ]
  },
  {
    name: "Sacco Management",
    href: "/sacco",
    icon: CarFront,
    children: [
      { name: "Management", href: "/sacco/management", initials: "M" },
      { name: "Sacco Billing", href: "/sacco/billing", initials: "SB" },
      { name: "Stickers", href: "/sacco/stickers", initials: "ST" },
      { name: "Vehicle Bills", href: "/sacco/vehicles", initials: "CB" },
      { name: "Transfer Vehicle", href: "/sacco/transfer", initials: "T" },
      { name: "Archiving Requests", href: "/sacco/archiving", initials: "AR" },
      { name: "Waiver Requests", href: "/sacco/waiver", initials: "WR" },
      { name: "Account Statement", href: "/sacco/statement", initials: "AS" },
    ]
  },
  {
    name: "Unstructured Revenue",
    href: "/unstructured",
    icon: Coins,
    children: [
      { name: "Payments", href: "/unstructured/payments", initials: "P" },
      { name: "Create Bill", href: "/unstructured/create", initials: "CB" },
      { name: "Bills", href: "/unstructured/bills", initials: "B" },
    ]
  },
  {
    name: "Physical Planning",
    href: "/physical-planning",
    icon: MapPin,
    children: [
      { name: "Get Bill", href: "/physical-planning/get-bill", initials: "GB" },
      { name: "Bills", href: "/physical-planning/bills", initials: "B" },
    ]
  },
  {
    name: "Water Management",
    href: "/water",
    icon: Droplet,
    children: [
      { name: "Apply Connection", href: "/water/apply", initials: "AC" },
      { name: "Applications Approval", href: "/water/approvals", initials: "AA" },
      { name: "All Connections", href: "/water/connections", initials: "AC" },
      { name: "Metered Connections", href: "/water/metered", initials: "MC" },
      { name: "Meters Owners", href: "/water/owners", initials: "MO" },
      { name: "Meter Readings", href: "/water/readings", initials: "MR" },
      { name: "Charges", href: "/water/charges", initials: "WC" },
      { name: "Generate Bill", href: "/water/generate-bill", initials: "GB" },
      { name: "Bills", href: "/water/bills", initials: "B" },
      { name: "Transactions", href: "/water/transactions", initials: "TR" },
      { name: "Account Statements", href: "/water/statements", initials: "AS" },
    ]
  },
  {
    name: "Fishery",
    href: "/fishery",
    icon: Anchor,
    children: [
      { name: "Add Fish Permits", href: "/fishery/add", initials: "AFP" },
      { name: "Bills", href: "/fishery/bills", initials: "B" },
      { name: "Payments", href: "/fishery/payments", initials: "P" },
      { name: "Permits", href: "/fishery/permits", initials: "P" },
    ]
  },
  {
    name: "Demand Notice",
    href: "/demand-notice",
    icon: Headset,
    children: [
      { name: "Land Rates", href: "/demand-notice/land", initials: "LR" },
      { name: "House Rent", href: "/demand-notice/house", initials: "HR" },
      { name: "Stall Rent", href: "/demand-notice/stall", initials: "SR" },
    ]
  },
  {
    name: "Cashier",
    href: "/cashier",
    icon: User,
    children: [
      { name: "Complete Payment", href: "/cashier/payment", initials: "CP" },
      { name: "Verify Bill", href: "/cashier/verify", initials: "VB" },
      { name: "Download UBP Permit", href: "/cashier/download", initials: "PP" },
    ]
  },
  {
    name: "Reconciliation",
    href: "/reconciliation",
    icon: User,
    children: [
      { name: "Attendant Reconcile", href: "/reconciliation/attendant", initials: "AR" },
      { name: "Attendant Bank Slip", href: "/reconciliation/bank-slip", initials: "AB" },
      { name: "Attendant Mpesa Deposits", href: "/reconciliation/mpesa", initials: "AMD" },
    ]
  },
  {
    name: "Reports",
    href: "/reports",
    icon: BarChart2,
    children: [
      { name: "Bills Report", href: "/reports/bills", initials: "BR" },
      { name: "STREET PARKING", initials: "SP", children: [] },
      { name: "BUS PARKS", initials: "BP", children: [] },
      { name: "ENFORCEMENT", initials: "EN", children: [] },
      { name: "BUSINESSES", initials: "B", children: [] },
      { name: "HOUSE/STALL RENT", initials: "H/SR", children: [] },
      { name: "LANDS", initials: "L", children: [] },
      { name: "HMIS", initials: "HM", children: [] },
      { name: "LIQUOR", initials: "L", children: [] },
      { name: "DEVOLVED UNITS", initials: "DU", children: [] },
      { name: "UNSTRUCTURED", initials: "U", children: [] },
      { name: "CESS", initials: "CS", children: [] },
      { name: "PHYSICAL PLANNING", initials: "PP", children: [] },
      { name: "CASHIER REPORTS", initials: "CP", children: [] },
      { name: "BILLER REPORTS", initials: "BP", children: [] },
      { name: "PAYMENTS", initials: "P", children: [] },
    ]
  },
  {
    name: "User Management",
    href: "/users",
    icon: UserCog,
    children: [
      { name: "Create User", href: "/users/create", initials: "CU" },
      { name: "Manage Groups (Roles)", href: "/users/groups", initials: "MG" },
      { name: "Manage Users", href: "/users/manage", initials: "MU" },
      { name: "SubCounty Approvals", href: "/users/approvals", initials: "SA" },
    ]
  },
  {
    name: "Approvals",
    href: "/approvals",
    icon: Stamp,
    children: [
      { name: "Business Permits", href: "/approvals/business", initials: "BP" },
      { name: "Business Permits Officers", href: "/approvals/officers", initials: "BPI" },
    ]
  },
  {
    name: "POS AppStore",
    href: "/pos",
    icon: Smartphone,
    children: [
      { name: "Update Store", href: "/pos/update", initials: "US" },
    ],
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Sliders,
    children: [
      { name: "Business Permits", href: "/settings/business", initials: "BP" },
      { name: "Parking", href: "/settings/parking", initials: "P" },
      { name: "Finance", href: "/settings/finance", initials: "F" },
      { name: "Land Management", href: "/settings/land", initials: "LM" },
      { name: "Rent Management", href: "/settings/rent", initials: "RM" },
      { name: "Devolved Unit Management", href: "/settings/devolved", initials: "DUM" },
      { name: "Liquor Permits Management", href: "/settings/liquor", initials: "LPM" },
      { name: "Public Health Management", href: "/settings/health", initials: "PHM" },
      { name: "County", href: "/settings/county", initials: "C" },
      { name: "Billing", href: "/settings/billing", initials: "BL" },
      { name: "Task Management", href: "/settings/tasks", initials: "TM" },
      { name: "Cess", href: "/settings/cess", initials: "CS" },
      { name: "Fishery Management", href: "/settings/fishery", initials: "FM" },
      { name: "Fire Management", href: "/settings/fire", initials: "FM" },
      { name: "Water Management", href: "/settings/water", initials: "WM" },
      { name: "Unstructured Revenue", href: "/settings/unstructured", initials: "UR" },
      { name: "Physical Planning", href: "/settings/physical", initials: "PP" },
      { name: "Fire Permit Settings", href: "/settings/fire-permit", initials: "FSP" },
    ],
  },
  {
    name: "Support",
    href: "/support",
    icon: Headset,
    children: [
      { name: "PARKING", initials: "PK", children: [] },
      { name: "PAYMENTS", initials: "PY", children: [] },
      { name: "PERMITS", initials: "PM", children: [] },
    ]
  },
  {
    name: "Audit Trail",
    href: "/audit-trail",
    icon: BarChart2,
    children: [
      { name: "Events", href: "/audit-trail/events", initials: "E" },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [expandedGroups, setExpandedGroups] = useState<string[]>([]);

  // Automatically expand the group that matches the current pathname
  useEffect(() => {
    navItems.forEach((item) => {
      if (pathname.startsWith(item.href) && !expandedGroups.includes(item.name)) {
        setExpandedGroups((prev) => [...prev, item.name]);
      }
    });
  // eslint-disable-next-deps
  }, [pathname]);

  const toggleGroup = (name: string, e: React.MouseEvent) => {
    e.preventDefault();
    setExpandedGroups((prev) =>
      prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]
    );
  };

  const filteredNav = navItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) || 
    item.children?.some(child => child.name.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <>
      {/* Mobile Top Header (replaces bottom floating button) */}
      <div className="fixed top-0 left-0 h-16 z-50 flex items-center gap-3 px-4 lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 -ml-2 rounded-lg text-muted-foreground hover:bg-secondary focus:outline-none transition-colors"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          ) : (
            <Menu size={24} className="transition-transform duration-200" />
          )}
        </button>
        <div className="flex items-center gap-2 pointer-events-none">
          <Image src="/logo.png" alt="Busia County" width={28} height={28} className="object-contain" />
          <span className="font-semibold text-foreground tracking-tight text-sm whitespace-nowrap">
            Busia County RMIS
          </span>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r bg-secondary transition-transform duration-300 lg:static lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header / Logo */}
        <div className="flex py-4 shrink-0 items-center gap-3 border-b bg-white px-6">
          <Image src="/logo.png" alt="Busia County" width={100} height={100} className="object-contain" />
          <span className="font-semibold text-foreground tracking-tight whitespace-nowrap">
            Busia County RMIS
          </span>
        </div>

        {/* Search */}
        <div className="p-4 bg-white border-b">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Filter..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border bg-secondary/50 py-2 pl-9 pr-4 text-sm outline-none transition-colors focus:border-primary focus:bg-white"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto py-4 space-y-1 bg-white">
          {filteredNav.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            const isGroupExpanded = expandedGroups.includes(item.name);
            const isParentActive = pathname.startsWith(item.href);

            return (
              <div key={item.name} className="px-2">
                {hasChildren ? (
                  <button
                    onClick={(e) => toggleGroup(item.name, e)}
                    className={`flex w-full items-center justify-between gap-3 rounded-lg px-4 py-3 text-sm transition-colors ${
                      isGroupExpanded
                        ? "bg-secondary text-foreground font-semibold"
                        : isParentActive
                          ? "bg-primary/5 text-primary font-medium"
                          : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    }`}
                  >
                    <div className="flex items-center gap-3 font-medium uppercase tracking-wider text-[13px]">
                      <item.icon size={20} className={isParentActive ? "text-primary" : "text-muted-foreground"} />
                      <span>{item.name}</span>
                    </div>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${isGroupExpanded ? "rotate-180" : ""}`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition-colors font-medium uppercase tracking-wider text-[13px] ${
                      isParentActive
                        ? "bg-primary/5 text-primary border-l-4 border-primary"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground border-l-4 border-transparent"
                    }`}
                  >
                    <item.icon size={20} className={isParentActive ? "text-primary" : "text-muted-foreground"} />
                    <span>{item.name}</span>
                  </Link>
                )}

                {/* Submenu */}
                {hasChildren && isGroupExpanded && (
                  <div className="mt-1 flex flex-col space-y-1 pl-4 pr-2 py-2 bg-secondary/30 rounded-lg mx-2 border-l-2 border-primary/20">
                    {item.children?.map((child) => {
                      if (child.isHeader) {
                        return (
                          <div key={child.name} className="px-4 py-2 mt-2 text-[11px] font-bold tracking-widest text-muted-foreground uppercase">
                            {child.name}
                          </div>
                        );
                      }
                      
                      if (child.children) {
                        const isSubExpanded = expandedGroups.includes(`${item.name}-${child.name}`);
                        return (
                          <div key={child.name}>
                            <button
                              onClick={(e) => toggleGroup(`${item.name}-${child.name}`, e)}
                              className={`flex w-full items-center justify-between gap-4 rounded-lg px-4 py-2.5 text-[14px] transition-colors text-muted-foreground hover:bg-secondary hover:text-foreground`}
                            >
                              <div className="flex items-center gap-4">
                                {child.icon ? (
                                  <child.icon size={16} className="shrink-0" />
                                ) : (
                                  <ChevronRight size={14} className="shrink-0 text-muted-foreground/50" />
                                )}
                                <span>{child.name}</span>
                              </div>
                              <ChevronDown
                                size={14}
                                className={`transition-transform duration-200 ${isSubExpanded ? "rotate-180" : ""}`}
                              />
                            </button>
                            {isSubExpanded && (
                              <div className="mt-1 flex flex-col space-y-1 pl-10 pb-2 border-l border-secondary ml-4">
                                {child.children.length === 0 && (
                                  <span className="py-1.5 text-[12px] text-muted-foreground/50 italic">
                                    No reports yet
                                  </span>
                                )}
                                {child.children.map(sub => {
                                  const isSubActive = pathname === sub.href;
                                  return (
                                    <Link
                                      key={sub.name}
                                      href={sub.href || "#"}
                                      onClick={() => setIsOpen(false)}
                                      className={`block py-1.5 text-[13px] transition-colors ${
                                        isSubActive
                                          ? "text-primary font-medium"
                                          : "text-muted-foreground hover:text-foreground"
                                      }`}
                                    >
                                      {sub.name}
                                    </Link>
                                  )
                                })}
                              </div>
                            )}
                          </div>
                        );
                      }

                      const isChildActive = pathname === child.href;
                      return (
                        <Link
                          key={child.name}
                          href={child.href || "#"}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center gap-4 rounded-lg px-4 py-2.5 text-[14px] transition-colors ${
                            isChildActive
                              ? "bg-primary/5 text-primary font-medium border-l-2 border-primary"
                              : "text-muted-foreground hover:bg-secondary hover:text-foreground border-l-2 border-transparent"
                          }`}
                        >
                          {child.icon ? (
                            <child.icon size={16} className="shrink-0" />
                          ) : (
                            <ChevronRight size={14} className="shrink-0 text-muted-foreground/50" />
                          )}
                          <span>{child.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
}

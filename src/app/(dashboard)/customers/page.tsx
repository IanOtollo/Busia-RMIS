"use client";

import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal, FileText, CheckCircle, XCircle } from "lucide-react";

export type Customer = {
  id: string;
  name: string;
  phone: string;
  idNumber: string;
  status: "Active" | "Inactive";
  registrationDate: string;
};

const data: Customer[] = [];

const columns: ColumnDef<Customer>[] = [
  {
    accessorKey: "id",
    header: "Customer ID",
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex items-center gap-1 hover:text-foreground"
        >
          Customer Name
          <ArrowUpDown size={14} />
        </button>
      );
    },
  },
  {
    accessorKey: "phone",
    header: "Phone Number",
  },
  {
    accessorKey: "idNumber",
    header: "ID/Passport",
  },
  {
    accessorKey: "registrationDate",
    header: "Date Registered",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <span
          className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${
            status === "Active"
              ? "bg-green-50 text-green-700"
              : "bg-red-50 text-red-700"
          }`}
        >
          {status === "Active" ? <CheckCircle size={12} /> : <XCircle size={12} />}
          {status}
        </span>
      );
    },
  },
  {
    id: "actions",
    cell: () => {
      return (
        <button className="text-muted-foreground hover:text-foreground">
          <MoreHorizontal size={18} />
        </button>
      );
    },
  },
];

export default function CustomersPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-foreground tracking-tight">Customers</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Manage all registered customers in the county.
          </p>
        </div>
        <button className="btn-primary">Register New Customer</button>
      </div>

      <DataTable columns={columns} data={data} searchKey="name" />
    </div>
  );
}
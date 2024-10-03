"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";

import { InstagramIcon } from "@/assets/icons/instagram";
import { Messenger } from "@/assets/icons/messenger";
import { DataTableColumnHeader } from "@/components/dashboard/data-table/data-table-column-header";
import { DataTableRowActions } from "@/components/dashboard/data-table/data-table-row-actions";
import { PostEngagement } from "./schema";

export const columns: ColumnDef<PostEngagement>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: true,
  },
  {
    accessorKey: "platform",
    header: () => null,
    cell: ({ row }) => (
      <div className="w-[80px]">
        {row.getValue("platform") === "instagram" ? (
          <InstagramIcon />
        ) : (
          <Messenger />
        )}
      </div>
    ),
    enableSorting: true,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate">{row.getValue("name")}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "engaged",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Engaged / Unique" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">
        {row.original.engaged} / {row.original.unique}
      </div>
    ),
    enableSorting: true,
  },
  {
    accessorKey: "acquired",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Acquired" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue("acquired")}</div>
    ),
    enableSorting: true,
  },
  {
    accessorKey: "conversion",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Conversion" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue("conversion")}%</div>
    ),
    enableSorting: true,
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];

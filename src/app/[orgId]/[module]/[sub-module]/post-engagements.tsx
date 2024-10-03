import { DataTable } from "@/components/dashboard/data-table/data-table";
import { columns } from "@/constants/post-engagements/columns";
import { PostEngagement } from "@/constants/post-engagements/schema";
import { postEngagements } from "@/constants/seed";

export function PostEngagements() {
  return (
    <DataTable data={postEngagements as PostEngagement[]} columns={columns} />
  );
}

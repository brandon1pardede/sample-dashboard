import { DataTable } from "@/components/dashboard/data-table/data-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { columns } from "@/constants/dashboard/columns";
import { postEngagementSchema } from "@/constants/dashboard/schema";
import { Layout } from "@/layouts/layout";
import { promises as fs } from "fs";
import path from "path";
import { z } from "zod";

async function getPostEngagements() {
  const data = await fs.readFile(
    path.join(process.cwd(), "post-engagements.json")
  );

  const postEngagements = JSON.parse(data.toString());

  return z.array(postEngagementSchema).parse(postEngagements);
}

export default async function Dashboard() {
  const postEngagements = await getPostEngagements();

  return (
    <Layout className="flex flex-col lg:flex-row items-start gap-8">
      <ContextCard />
      <div className="grow">
        <DataTable data={postEngagements} columns={columns} />
      </div>
    </Layout>
  );
}

import { Button } from "@/components/ui/button";
import {
  CheckSquare,
  FileJson,
  Link,
  MessageSquare,
  QrCode,
  Send,
} from "lucide-react";

function ContextCard() {
  return (
    <Card className="w-[300px]">
      <CardHeader>
        <CardTitle className="font-medium text-gray-500">
          Capture Tools
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Button variant="ghost" className="justify-start px-4">
          <Link className="w-5 h-5 mr-3" />
          <span>Links Library</span>
        </Button>
        <Button variant="ghost" className="justify-start px-4">
          <FileJson className="w-5 h-5 mr-3" />
          <span>JSON Generator</span>
        </Button>
        <Button variant="ghost" className="justify-start px-4">
          <CheckSquare className="w-5 h-5 mr-3" />
          <span>Checkbox Plugin</span>
        </Button>
        <Button variant="ghost" className="justify-start px-4">
          <QrCode className="w-5 h-5 mr-3" />
          <span>Messenger Code</span>
        </Button>
        <Button variant="default" className="justify-start px-4">
          <MessageSquare className="w-5 h-5 mr-3" />
          <span>Post Engagement</span>
        </Button>
        <Button variant="ghost" className="justify-start px-4">
          <Send className="w-5 h-5 mr-3" />
          <span>Send To Messenger</span>
        </Button>
      </CardContent>
    </Card>
  );
}

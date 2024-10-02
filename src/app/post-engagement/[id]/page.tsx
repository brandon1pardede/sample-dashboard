import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Layout } from "@/layouts/layout";

import { AutoResponse } from "@/components/post-engagement/auto-response";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings } from "@/components/post-engagement/settings";

export default function PostEngagement() {
  return (
    <Layout className="flex flex-col gap-8">
      <Context />
      <div className="grid grid-cols-2">
        <LeftGrid />
        <RightGrid />
      </div>
    </Layout>
  );
}

export function LeftGrid() {
  return (
    <Tabs defaultValue="settings">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="settings">Settings</TabsTrigger>
        <TabsTrigger value="auto-response">Auto Response</TabsTrigger>
      </TabsList>
      <TabsContent value="settings">
        <Settings />
      </TabsContent>
      <TabsContent value="auto-response">
        <AutoResponse />
      </TabsContent>
    </Tabs>
  );
}

export function RightGrid() {
  return (
    <Tabs defaultValue="select-post">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="select-post">Select A Post</TabsTrigger>
        <TabsTrigger value="post-id-url">Post ID / URL</TabsTrigger>
      </TabsList>
      <TabsContent value="account"></TabsContent>
      <TabsContent value="password"></TabsContent>
    </Tabs>
  );
}

export function Context() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Capture Tools</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Post Engagement</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Edit</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

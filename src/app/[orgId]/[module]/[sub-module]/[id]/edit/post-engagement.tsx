import { AutoResponse } from "@/components/post-engagement/auto-response";
import PostIdUrl from "@/components/post-engagement/post-id-url";
import SelectPost from "@/components/post-engagement/select-post";
import { Settings } from "@/components/post-engagement/settings";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function PostEngagement() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <LeftGrid />
      <RightGrid />
    </div>
  );
}

export function LeftGrid() {
  return (
    <Tabs defaultValue="settings">
      <TabsList className="grid w-full grid-cols-2 rounded-tr-none rounded-br-none rounded-bl-none">
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
      <TabsList className="grid w-full grid-cols-2 rounded-tl-none rounded-bl-none rounded-br-none">
        <TabsTrigger value="select-post">Select A Post</TabsTrigger>
        <TabsTrigger value="post-id-url">Post ID / URL</TabsTrigger>
      </TabsList>
      <TabsContent value="select-post">
        <SelectPost />
      </TabsContent>
      <TabsContent value="post-id-url">
        <PostIdUrl />
      </TabsContent>
    </Tabs>
  );
}

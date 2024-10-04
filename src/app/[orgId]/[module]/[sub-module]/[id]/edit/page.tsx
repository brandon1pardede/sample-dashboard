"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { navsHash, subNavsHash } from "@/constants/app";
import { Layout } from "@/layouts/layout";
import { usePathname } from "next/navigation";
import { PostEngagement } from "./post-engagement";

export default function Page({
  params,
}: {
  params: { module: string; ["sub-module"]: string; id: string };
}) {
  return (
    <Layout className="flex flex-col gap-8" module={params.module}>
      <Context params={params} />
      {params["sub-module"] === "post-engagements" && <PostEngagement />}
    </Layout>
  );
}

function Context({
  params,
}: {
  params: { module: string; ["sub-module"]: string; id: string };
}) {
  const pathname = usePathname();

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href={pathname.split("/").slice(0, -3).join("/")}>
            {navsHash[params.module].label}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href={pathname.split("/").slice(0, -2).join("/")}>
            {subNavsHash[params["sub-module"]].label}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Edit</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

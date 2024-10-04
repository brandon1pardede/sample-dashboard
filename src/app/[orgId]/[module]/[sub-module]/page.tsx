"use client";

import { Layout } from "@/layouts/layout";
import { ReactNode } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { navsHash, SubNav, subNavs } from "@/constants/app";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PostEngagements } from "./post-engagements";

export default function Page({
  params,
}: {
  params: { module: string; ["sub-module"]: string };
}) {
  return (
    <SubModuleLayout params={params}>
      {params["sub-module"] === "post-engagements" && <PostEngagements />}
    </SubModuleLayout>
  );
}

function SubModuleLayout({
  params,
  children,
}: {
  params: { module: string; ["sub-module"]: string };
  children: ReactNode;
}) {
  const moduleSubNavs = subNavs.filter(
    (nav) => nav.parentKey === params.module
  );

  return (
    <Layout
      module={params.module}
      className="flex flex-col lg:flex-row items-start gap-8"
    >
      <SubModuleNavs
        module={params.module}
        subNavs={moduleSubNavs}
        subModule={params["sub-module"]}
      />
      <div className="grow">{children}</div>
    </Layout>
  );
}

function SubModuleNavs({
  subNavs,
  subModule,
  module,
}: {
  subNavs: SubNav[];
  subModule: string;
  module: string;
}) {
  const currentPath = usePathname();

  return (
    <Card className="w-full lg:w-[300px]">
      <CardHeader className="p-2">
        <CardTitle className="font-bold text-gray-500 px-4 py-2">
          {navsHash[module].label}
        </CardTitle>
      </CardHeader>
      <CardContent className="grid px-2 pb-2">
        {subNavs.map((nav) => {
          const Icon = nav.icon;
          const modifiedPath =
            currentPath.split("/").slice(0, 3).join("/") + "/" + nav.key;

          return (
            <Link href={modifiedPath} key={nav.key}>
              <Button
                variant={subModule === nav.key ? "secondary" : "ghost"}
                className="w-full justify-start px-4"
                key={nav.key}
              >
                <Icon className="w-5 h-5 mr-3" />
                <span>{nav.label}</span>
              </Button>
            </Link>
          );
        })}
      </CardContent>
    </Card>
  );
}

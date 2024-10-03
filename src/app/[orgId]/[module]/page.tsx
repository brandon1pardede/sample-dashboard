"use client";

import { navsHash, subNavs } from "@/constants/app";
import { Layout } from "@/layouts/layout";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

function Page({ params: { module } }: { params: { module: string } }) {
  const router = useRouter();
  const moduleSubNav = subNavs.find(
    (nav) => nav.parentKey === module && nav.hasContent
  );

  const pathname = usePathname();

  useEffect(() => {
    if (moduleSubNav) {
      const modifiedPath =
        pathname.split("/").slice(0, 3).join("/") + "/" + moduleSubNav.key;

      router.push(modifiedPath);
    }
  }, [moduleSubNav, router]);

  return <Layout module={module}>{navsHash[module].label} Module</Layout>;
}

export default Page;

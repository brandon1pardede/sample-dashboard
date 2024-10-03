"use client";

import { ReactNode, SVGProps } from "react";

import {
  ChartLine,
  FileJsonIcon,
  Gauge,
  Layers,
  LinkIcon,
  Magnet,
  Megaphone,
  MessageCircle,
  MessageSquareDot,
  PlugZap,
  QrCode,
  Users,
  WandSparkles,
} from "lucide-react";

export type SubNav = {
  parentKey: string;
  key: string;
  label: string;
  icon: (props: SVGProps<SVGSVGElement>) => ReactNode;
  hasContent?: boolean;
};

export const subNavs: SubNav[] = [
  {
    parentKey: "capture-tools",
    key: "links-library",
    label: "Links library",
    icon: LinkIcon,
  },
  {
    parentKey: "capture-tools",
    key: "json-generator",
    label: "JSON Generator",
    icon: FileJsonIcon,
  },
  {
    parentKey: "capture-tools",
    key: "checkbox-plugin",
    label: "Checkbox Plugin",
    icon: PlugZap,
  },
  {
    parentKey: "capture-tools",
    key: "messenger-code",
    label: "Messenger Code",
    icon: QrCode,
  },
  {
    parentKey: "capture-tools",
    key: "post-engagements",
    label: "Post Engagement",
    icon: MessageSquareDot,
    hasContent: true,
  },
  {
    parentKey: "capture-tools",
    key: "send-to-messenger",
    label: "Send To Messenger",
    icon: MessageCircle,
  },
];

export const navs = [
  {
    label: "Dashboard",
    key: "dashboard",
    icon: Gauge,
  },
  {
    label: "Audience",
    key: "audience",
    icon: Users,
  },
  {
    label: "Messaging",
    key: "messaging",
    icon: MessageCircle,
  },
  {
    label: "Capture tools",
    key: "capture-tools",
    icon: Magnet,
  },
  {
    label: "Broadcast",
    key: "broadcasts",
    icon: Megaphone,
  },
  {
    label: "Automations",
    key: "automations",
    icon: WandSparkles,
  },
  {
    label: "Integrations",
    key: "integrations",
    icon: Layers,
  },
  {
    label: "Analytics",
    key: "analytics",
    icon: ChartLine,
  },
];

export const navsHash = Object.fromEntries(navs.map((nav) => [nav.key, nav]));
export const subNavsHash = Object.fromEntries(
  subNavs.map((nav) => [nav.key, nav])
);

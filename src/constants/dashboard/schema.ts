import { z } from "zod";

export const postEngagementSchema = z.object({
  id: z.string().optional(),
  platform: z.enum(["instagram", "messenger"]),
  name: z.string(),
  engaged: z.number(),
  unique: z.number(),
  acquired: z.number(),
  conversion: z.number(),
});

export type PostEngagement = z.infer<typeof postEngagementSchema>;

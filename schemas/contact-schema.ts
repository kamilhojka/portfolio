"use client";

import * as z from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .max(30, { message: "Name must be 30 characters or less" }),
  email: z.string().min(1, { message: "Email is required" }).email(),
  message: z
    .string()
    .min(1, { message: "Message is required" })
    .max(3000, { message: "Message must be 3000 characters or less" }),
});

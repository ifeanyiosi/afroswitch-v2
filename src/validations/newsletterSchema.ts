import { z } from "zod";

export const newsletterSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: "First name must be at least 3 characters long" })
    .max(50, { message: "First name can't exceed 50 characters" }),

  lastName: z
    .string()
    .min(3, { message: "Last name must be at least 3 characters long" })
    .max(50, { message: "Last name can't exceed 50 characters" }),

  email: z
    .string()
    .email({ message: "Please enter a valid email address" })
    .max(50, { message: "Email can't exceed 50 characters" }),

  phone: z
    .string()
    .regex(/^(\+?[1-9]\d{1,14}|0\d{9,10})$/, {
      message: "Please enter a valid phone number",
    })
    .max(15, { message: "Phone number can't exceed 15 characters" }),

  location: z
    .string()
    .min(2, { message: "Location must be at least 2 characters long" })
    .max(50, { message: "Location can't exceed 50 characters" }),
});

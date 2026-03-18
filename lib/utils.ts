import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatAmount = (amount: number): string => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return formatter.format(amount);
};

export const authFormSchema = (type: string) =>
  z.object({
    // sign up
    firstName:
      type === "sign-in"
        ? z.string().optional()
        : z.string().min(3, "First name must be at least 3 characters"),
    lastName:
      type === "sign-in"
        ? z.string().optional()
        : z.string().min(3, "Last name must be at least 3 characters"),
    address:
      type === "sign-in"
        ? z.string().optional()
        : z
            .string()
            .min(3, "Address must be at least 3 characters")
            .max(50, "Address is too long"),
    city:
      type === "sign-in"
        ? z.string().optional()
        : z.string().min(3, "City must be at least 3 characters").max(50),
    state:
      type === "sign-in"
        ? z.string().optional()
        : z
            .string()
            .min(2, "State must be exactly 2 letters")
            .max(2, "State must be exactly 2 letters")
            .regex(/^[a-zA-Z]+$/, "State must be letters only"),
    postalCode:
      type === "sign-in"
        ? z.string().optional()
        : z
            .string()
            .min(3, "Postal code too short")
            .max(6, "Postal code too long"),
    dateOfBirth:
      type === "sign-in"
        ? z.string().optional()
        : z.string().min(3, "Date of birth is required"),
    ssn:
      type === "sign-in"
        ? z.string().optional()
        : z.string().min(3, "SSN is required"),

    // both
    email: z.email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
  });

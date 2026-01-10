import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Build a normalized, merged Tailwind CSS class string from the provided class values.
 *
 * @param inputs - Class values (strings, arrays, objects, booleans) to include in the final class list
 * @returns The merged class string with conflicting Tailwind utility classes resolved
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
// src/lib/utils.ts
// Utility functions (e.g., for classNames)
export function cn(
  ...classes: (string | undefined | null | boolean)[]
): string {
  return classes.filter(Boolean).join(" ");
}

// Export empty if no utils needed

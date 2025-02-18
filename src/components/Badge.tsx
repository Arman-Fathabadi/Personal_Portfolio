import React from "react";
import clsx from "clsx"; // Optional: For handling class merging

interface BadgeProps {
  children: React.ReactNode;
  className?: string; // ✅ Allow className prop
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={clsx(
        "px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-900",
        className // ✅ Allow custom styles
      )}
    >
      {children}
    </span>
  );
}

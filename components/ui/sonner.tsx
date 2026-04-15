"use client";

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      toastOptions={{
        className:
          "bg-[#12121a] text-white border border-cyan-500/30 shadow-lg",
        classNames: {
          success: "border-green-500 text-green-400",
          error: "border-red-500 text-red-400",
          warning: "border-yellow-500 text-yellow-400",
          info: "border-blue-500 text-blue-400",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };

"use client";

import { useToast } from "@/hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";
import { CheckCircle, XCircle } from "lucide-react"; // Import Lucide icons

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, action, type, ...props }) => (
        <Toast
          key={id}
          {...props}
          className={`flex items-center justify-between max-w-md mx-auto p-6 text-lg shadow-lg rounded-lg transition-transform transform scale-105 ${
            type === "success"
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          <div className="flex items-center gap-2 flex-grow justify-center">
            {" "}
            {/* Centering container */}
            {type === "success" ? (
              <CheckCircle className="h-12 w-12" />
            ) : (
              <XCircle className="h-12 w-12" />
            )}
            <div className="grid gap-1 text-center">
              {" "}
              {/* Center text */}
              {title && <ToastTitle className="text-lg">{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
          </div>
          {action}
          <ToastClose />
        </Toast>
      ))}
      <ToastViewport className="fixed inset-0 flex items-center z-50" />
    </ToastProvider>
  );
}

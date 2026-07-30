"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { ToastType } from "@/constants";
import { Toast } from "./Toast";
import styles from "./ToastViewport.module.css";

export type ShowToastInput = {
  type: ToastType;
  title: ReactNode;
  description?: ReactNode;
  action?: boolean;
};

type ToastItem = ShowToastInput & {
  id: number;
};

type ToastContextValue = {
  showToast: (toast: ShowToastInput) => void;
  dismissToast: () => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<ToastItem | null>(null);

  const showToast = useCallback((next: ShowToastInput) => {
    setToast({
      ...next,
      id: Date.now(),
    });
  }, []);

  const dismissToast = useCallback(() => {
    setToast(null);
  }, []);

  const value = useMemo(
    () => ({
      showToast,
      dismissToast,
    }),
    [showToast, dismissToast]
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className={styles.viewport}>
        {toast ? (
          <Toast
            key={toast.id}
            type={toast.type}
            title={toast.title}
            description={toast.description}
            action={toast.action}
            onDismiss={dismissToast}
          />
        ) : null}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast(): ToastContextValue {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
}

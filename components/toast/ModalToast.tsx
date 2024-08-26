import React, { useEffect, useState } from "react";
import ToastProps, { ToastType } from "../../props/ToastProps";
import { createToastAnimations } from "../../utils/ToastUtitlies";
import ToastLayout from "./ToastLayout";

// Global function
let showToastFunction: (
  type: ToastType,
  message: string,
  duration?: number
) => void = () => {};

const ModalToast = () => {
  // States
  const [toast, setToast] = useState<ToastProps | null>(null);
  const [toastHeight, setToastHeight] = useState(0);

  // Toast animation configuration
  const { show, hide, opacityAnimation, toastAnimation } =
    createToastAnimations(toastHeight);

  // Function to trigger toast
  const showToast = (type: ToastType, message: string, duration?: number) => {
    if (!toast?.visible) {
      setToast({ visible: true, type, message });
      show();

      setTimeout(() => hide(() => setToast(null)), duration || 2000);
    }
  };

  useEffect(() => {
    showToastFunction = showToast;
  }, [toast]);

  return (
    toast?.visible && (
      <ToastLayout
        toast={toast}
        toastAnimation={toastAnimation}
        opacityAnimation={opacityAnimation}
        setToastHeight={setToastHeight}
      />
    )
  );
};

export default ModalToast;

// Function to trigger modal from any component
export const triggerModalToast = (
  type: ToastType,
  message: string,
  duration?: number
) => {
  showToastFunction(type, message, duration);
};

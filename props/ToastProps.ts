interface ToastProps {
  visible: boolean;
  type: ToastType;
  message: string;
}

export type ToastType = "success" | "error" | "message";

export default ToastProps;

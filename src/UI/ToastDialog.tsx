import React, { useRef } from "react";
import { Toast } from "primereact/toast";

const ToastDialog = () => {
  const toast = useRef(null);
  return <Toast ref={toast} />;
};

export default ToastDialog;

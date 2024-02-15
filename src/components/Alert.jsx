"use client";

import Alert from "react-bootstrap/Alert";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { setShowAlert } from "@/redux/slices/alertSlice";

export default function AlertItem() {
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.alert);

  const handleClose = () => {
    dispatch(setShowAlert(false));
  };

  if (alert && alert.showAlert) {
    setTimeout(() => {
      dispatch(setShowAlert(false));
    }, 5000);
    return (
      <Alert variant="success" dismissible transition onClose={handleClose}>
        {alert.text}
      </Alert>
    );
  } else return null;
}

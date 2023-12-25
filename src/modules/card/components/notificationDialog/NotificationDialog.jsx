import ReactDOM from "react-dom";
import "./NotificationDialog.scss";
import { useContext } from "react";
import { DialogContext } from "../../context/dialogContext";

const NotificationDialog = () => {
  const { isOpen, setIsOpen } = useContext(DialogContext);

  if (!isOpen) return null;

  setTimeout(() => {
    setIsOpen(false);
  }, 2000);

  return ReactDOM.createPortal(
    <div className="notification-dialog">
      <p>Product successfully added to your shopping car</p>
    </div>,
    document.body
  );
};

export default NotificationDialog;

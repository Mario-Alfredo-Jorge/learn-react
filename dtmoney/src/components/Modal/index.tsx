import { useEffect, ReactNode } from "react";
import { Container, ModalHeader } from "./styles";

interface ModalProps {
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export const Modal = ({ children, onClose, isOpen, className }: ModalProps) => {
  const closeOnKeyDown = (e: any) => {
    if ((e.charCode || e.keyCode) === 27) onClose();
  };

  useEffect(() => {
    document.addEventListener("keydown", closeOnKeyDown);

    return () => {
      document.removeEventListener("keydown", closeOnKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className={`${isOpen ? "open" : ""}`} onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <button className="close" onClick={onClose}>
            x
          </button>
        </ModalHeader>
        <div className={className}>{children}</div>
      </div>
    </Container>
  );
};

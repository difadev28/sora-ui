import clsx from "clsx";
import React, { useEffect } from "react";
import CloseIcon from "./assets/CloseIcon";
import { Button } from "@sora-ui-material/button";

interface ModalBaseProps {
  children: React.ReactNode;
  isOpen?: boolean,
  withClose?: boolean,
  handleClose?: () => void,
  className?: {
    container?: string,
    subContainer?: string,
    containerContent?: string,
    overlay?:string
  };
}

const ModalBase = ({ children, className, isOpen, handleClose, withClose }: ModalBaseProps) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className={clsx('base-modal-container', className?.container)}>
      {/* Overlay */}
      <div data-testid="modal-overlay" className={clsx('base-overlay', isOpen ? 'base-overlay--open' : 'base-overlay--close', className?.overlay)}></div>
      <div
        className={clsx('base-modal-container__sub', className?.subContainer, isOpen ? 'base-modal-container--sub--open' : 'base-modal-container--sub--close')}>
        <div className={clsx('base-modal-container__content', className?.containerContent)}>
          {
            withClose && (
              <Button
                data-testid="btn-close-modal"
                variant={"ghost"}
                onClick={handleClose}
                className={'base-modal-container__content__close'}>
                <CloseIcon />
              </Button>
            )
          }
          {children}
        </div>
      </div>
    </div>
  );
};

export default ModalBase;

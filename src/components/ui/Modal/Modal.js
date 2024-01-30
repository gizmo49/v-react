import React from "react";
import { Modal as ReactstrapModal, ModalBody } from "reactstrap";
import "./Modal.scss";

export const Modal = ({
    show,
    close,
    size,
    toggle,
    children,
    fullscreen = false,
    centered,
    contentClassName,
}) => {
   
    return (
        <ReactstrapModal
            isOpen={show}
            size={size}
            fade={true}
            toggle={toggle}
            zIndex={""}
            onClosed={close}
            fullscreen={fullscreen}
            scrollable={false}
            centered={centered}
            contentClassName={contentClassName}
            className={``}>
            <ModalBody
                className={``}>
                {children}
            </ModalBody>
        </ReactstrapModal>
    );
};

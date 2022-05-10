import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
const Backdrop = ({ close, show }) => {
  return (
    <div
      className={`${styles.backDrop}  ${show ? styles.showBackdrop : null} `}
      onClick={() => close()}
    ></div>
  );
};

const Overlay = ({ children, show }) => {
  return (
    <div className={`${styles.overlay} ${show ? styles.showOverlay : null}`}>
      {children}
    </div>
  );
};

const Modal = ({ children, show, closeModal }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Fragment>
          <Backdrop close={closeModal} show={show} />
          <Overlay show={show}>{children}</Overlay>
        </Fragment>,
        document.getElementById("modal")
      )}
    </Fragment>
  );
};

export default Modal;

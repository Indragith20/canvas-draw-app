import React, { useContext, useRef } from "react";
import ReactDOM from 'react-dom';
import afterTransition from "~/components/utils/transitionElement";
import styles from './Modal.css';


export const ModalLinks = () => ([
  {
    rel: 'stylesheet',
    href: styles
  }
]);

const ModalContext = React.createContext();


const Modal = ({ show, close, title, children, onClickOutsideClose = true }) => {
  let modalRef = useRef(null);
  function closeModal() {
    if (onClickOutsideClose) {
      modalRef.current.classList.add('exit-animation');
      requestAnimationFrame(() => {
        afterTransition(modalRef.current).then(() => {
          modalRef.current = null;
          close();
        })
      })

    }
  }
  if (typeof window === "undefined") {
    return null;
  } else {
    return ReactDOM.createPortal(
      <>
        {
          show ?
            <ModalContext.Provider value={{ close: closeModal }}>
              <div
                className="modalContainer"
                onClick={() => close()}
              >
                <div className="modal-background" onClick={closeModal}></div>
                <div className="modal enter-animation" ref={modalRef} onClick={(e) => e.stopPropagation()}>
                  {children}
                </div>
              </div>
            </ModalContext.Provider>
            : null
        }

      </>,
      document.getElementById('modal-root')
    );
  }

};

function Footer({ children }) {
  return (
    <footer className="modal-footer">{children}</footer>
  )
}

function Header({ children, needCloseIcon }) {
  const { close } = useContext(ModalContext)
  return (
    <header className="modal-header">
      {children}
      {
        needCloseIcon ? (
          <button className="close" onClick={() => close()}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon-style" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        ) : null
      }
    </header>
  )
}

Header.defaultProps = {
  needCloseIcon: true
}

function Content({ children }) {
  return (
    <main className="modal-content">
      {children}
    </main>
  )
}

Modal.Footer = Footer;
Modal.Header = Header;
Modal.Content = Content;

export default Modal;
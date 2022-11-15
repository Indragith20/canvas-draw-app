import React from "react";
import ReactDOM from 'react-dom';
import styles from './Modal.css';


export const ModalLinks = () => ([
  {
    rel: 'stylesheet',
    href: styles
  }
])


const Modal = ({ show, close, title, children }) => {
  if (typeof window === "undefined") {
    return null;
  } else {
    return ReactDOM.createPortal(
      <>
        {
          show ?

            <div
              className="modalContainer"
              onClick={() => close()}
            >
              <div className="modal" onClick={(e) => e.stopPropagation()}>
                {/* <header className="modal-header">
                  <h2 className="modal-header-title"> {title} </h2>
                  <button className="close" onClick={() => close()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </button>
                </header>
                <main className="modal-content"> {children} </main>
                <footer className="modal-footer">
                  <button className="modal-close" onClick={() => close()}>
                    Cancel
                  </button>

                  <button className="submit">Submit</button>
                </footer> */}
                {children}
              </div>
            </div>
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

function Header({ children, needCloseIcon, close }) {
  return (
    <header className="modal-header">
      {children}
      {
        needCloseIcon ? (
          <button className="close" onClick={() => close()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
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
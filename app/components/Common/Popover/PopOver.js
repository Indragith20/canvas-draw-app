import React, { useContext, useEffect, useState, useRef } from 'react';
import styles from './PopOver.css';

export const PopOverLinks = () => ([
  { href: styles, rel: 'stylesheet' }
]);

let PopOverContext = React.createContext();

// PopOver open in bottom by default. If needed change it to dynamic implementation
function PopOver({ children, position }) {
  let [open, toggleOpen] = useState(false);

  return (
    <PopOverContext.Provider value={{ open, toggleOpen, position }}>
      <div className='popover'>{children}</div>
    </PopOverContext.Provider>

  )
}

function TriggerNode({ children }) {
  let { open, toggleOpen } = useContext(PopOverContext);
  return (
    <div className='popover-trigger' onClick={(e) => {
      e.stopPropagation();
      toggleOpen(!open)
    }}>{children}</div>
  )
}

function Content({ children }) {
  let { open, toggleOpen, position = 'right' } = useContext(PopOverContext);
  let popOverRef = useRef(null);
  useEffect(() => {

    function onClickOutside(e) {
      if (popOverRef.current && popOverRef.current.contains(e.target)) {
        //toggleOpen(!open);
      } else {
        toggleOpen(false);
      }
    }

    if (open) {
      window.addEventListener('click', onClickOutside);
      window.addEventListener('scroll', onClickOutside);
    } else {
      window.removeEventListener('click', onClickOutside);
      window.removeEventListener('scroll', onClickOutside);
    }

    return () => {
      window.removeEventListener('mousedown', onClickOutside);
      window.removeEventListener('scroll', onClickOutside);
    }
  }, [open, toggleOpen])

  if (typeof window === 'undefined') {
    return null;
  }

  return open ? (
    <div className='popover-content' style={{ [position]: '0px' }} ref={popOverRef}>
      {children}
    </div>
  ) : null;

}

PopOver.TriggerNode = TriggerNode;
PopOver.Content = Content;

export default PopOver;
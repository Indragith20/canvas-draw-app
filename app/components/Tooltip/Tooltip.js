import React, { useRef } from 'react';
import styles from './Tooltip.css';
import { useWindowSize } from '../Common/hooks/useWindowSize';

export const TooltipStyles = () => [{ rel: 'stylesheet', href: styles }];

function Tooltip(props) {
  const { text, children, fontSize = 14, needBorder = false } = props;
  const toolTipTexRef = useRef(null);
  const [ width, height ] = useWindowSize();

  function onMouseMove(e) {
    toolTipTexRef.current.style.top = e.clientY + 'px';
    let bufferedWidth = width - 100;
    let bufferedheight = height - 100;
    if (e.clientX > bufferedWidth) {
      toolTipTexRef.current.style.right = '10px';
      toolTipTexRef.current.style.left = '';
    } else {
      toolTipTexRef.current.style.left = e.clientX + 'px';
      toolTipTexRef.current.style.right = '';
    }
  
    if (e.clientY > bufferedheight) {
      toolTipTexRef.current.style.bottom = '10px';
      toolTipTexRef.current.style.top = '';
    } else {
      toolTipTexRef.current.style.top = e.clientY + 'px';
      toolTipTexRef.current.style.bottom = '';
    }
  }

  return (
    <div className="tooltip" onMouseMove={onMouseMove} 
      style={{'--tooltip-font-size': `${fontSize}px`, '--border-style': needBorder ? '1px' : '0px', '--tooltip-background-color': needBorder ? 'var(--primary-background)' : 'transperant'} }>
      {children}
      <span ref={toolTipTexRef} className="tooltiptext">{text}</span>
    </div>
  )
}

export default Tooltip;
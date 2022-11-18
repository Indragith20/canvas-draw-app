import React, { useCallback, useContext, useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ToastContainer from './ToastContainer';

const ToastContext = React.createContext(null);

export const useToast = () => {
  const { addToast } = useContext(ToastContext);
  return { addToast };
}

function ToastProvider({ children }) {
  let [messages, setMessages] = useState([]);


  const addToast = useCallback(({ message, timeout, type }) => {
    setMessages((prevMessages) => {
      return [...prevMessages, { id: uuidv4(), message, timeout, type }]
    })
  }, [])

  function onDismiss(id) {
    setMessages((prevMessages) => {
      return prevMessages.filter(msg => msg.id !== id)
    })
  }


  const contextValue = useMemo(() => {
    return { addToast };
  }, [addToast])

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <ToastContainer messages={messages} onDismiss={onDismiss} />
    </ToastContext.Provider>
  )
}

export default ToastProvider;
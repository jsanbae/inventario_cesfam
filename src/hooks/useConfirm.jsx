import { createContext, useContext, useState, useRef } from "react"
import Alert from "src/components/Alert";

const ConfirmDialog = createContext();

export function ConfirmDialogProvider({ children }) {

  const [state, setState] = useState({ isOpen: false });
  const fn = useRef();

  const confirm = (data) => {
    return new Promise((resolve, reject) => {  
      setState({ ...data, isOpen: true});
      fn.current = (choice) => {
        resolve(choice);
        setState({ isOpen: false });
      }
    });
  }

  return (
    <ConfirmDialog.Provider value={confirm}>
      {children}
      <Alert 
        isOpen={state.isOpen} 
        {...state} 
        onConfirm={() => fn.current(true)}
        onCancel={() => fn.current(false)}
      />
    </ConfirmDialog.Provider>
  )
}

export default function useConfirm() {
  return useContext(ConfirmDialog)
}
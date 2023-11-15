import { useEffect } from "react";

const useOnHoverOutside = (ref, handler) => {
  
  useEffect(
    () => {    
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) return;
        handler(event);
      };

      document.addEventListener("mouseover", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mouseout", listener);
        document.removeEventListener("touchstart", listener);
      };

    },
    [ref, handler]
  );
}

export default useOnHoverOutside;
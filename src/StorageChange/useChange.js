import { useEffect, useState } from "react";

function useChange() {

    const [hasLocalStorageChanged,setHasLocalStorageChanged] = useState(false)
    useEffect(()=>{
      function localStorageChange(){
        setHasLocalStorageChanged(true)
      }
        window.addEventListener('storage', localStorageChange)

        return () => {

          window.removeEventListener("storage", localStorageChange);
        };
    },[])

      return {setHasLocalStorageChanged, hasLocalStorageChanged}
  };


export { useChange };

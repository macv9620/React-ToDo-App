import { useEffect, useState } from "react";

function useChange() {
    console.log('Ingreso a useChange');
    const [hasLocalStorageChanged,setHasLocalStorageChanged] = useState(false)
    useEffect(()=>{
      function localStorageChange(){
        setHasLocalStorageChanged(true)
        console.log('NOTIFICACION DE CAMBIOS');
      }
      console.log('añado listener storage');
        window.addEventListener('storage', localStorageChange)

        return () => {
          console.log('Eliminando evento');
          window.removeEventListener("storage", localStorageChange);
        };
    },[])

      return {setHasLocalStorageChanged, hasLocalStorageChanged}
  };


export { useChange };

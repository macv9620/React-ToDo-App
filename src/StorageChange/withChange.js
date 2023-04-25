import { useEffect, useState } from "react";

function withChange(WrappedComponent) {
  return function (props) {
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


    if (hasLocalStorageChanged) {
      return <WrappedComponent
              setHasLocalStorageChanged={setHasLocalStorageChanged}
              refresh={props.refreshTodos}
               />;
    } else {
      return null;
    }
  };
}

export { withChange };

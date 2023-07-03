import { useChange } from "./useChange";
import './StorageChange.css'

function StorageAlert({refreshTodos}){

        const{hasLocalStorageChanged, setHasLocalStorageChanged}=useChange()

        function refreshItems(){
            refreshTodos();
            setHasLocalStorageChanged(false);
        }

        if(hasLocalStorageChanged){
            return(
                <>
                <div className="changes-alert-background">
                    <div className="changes-alert-container">
                        <p className="changes-alert-text">Changes have occurred in your application, please Sync to continue</p>
                        <button onClick={refreshItems} className="changes-alert-button">Sync</button>
                    </div>
                </div>
                </>
            )
        } else {
            return null
        }

}

export {StorageAlert}


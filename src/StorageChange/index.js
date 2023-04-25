import { withChange } from "./withChange";
import './StorageChange.css'

function StorageAlert({setHasLocalStorageChanged, refresh}){
        function refreshItems(){
            refresh();
            setHasLocalStorageChanged(false);
        }
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
}

const StorageAlertWithChange = withChange(StorageAlert);

export {StorageAlertWithChange}


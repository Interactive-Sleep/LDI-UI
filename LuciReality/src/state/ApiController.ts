import { Arduino } from "../model/core/Arudino";
import StateManager from "./publishers/StateManager";

export class ApiController {
    
    public static readonly instance = new ApiController();
    private rootUrl = "http://172.20.10.3:8080";

    private constructor() {}

    public getArduinos(){
        fetch(this.rootUrl + "/arduinos")
        .then(res => res.json())
        .then(json => {
            const arduinos: Arduino[] = json.arduinos;
            StateManager.arduinos.publish(arduinos)
        })
        .catch(err => console.error(err))
    }

    public getArduino(){

    }

    public getNextCommandForArduino(){

    }

    /**
     * 
     * @param updateUI must update UI
     */
    public scheduleCommandForArduino(updateUI: () => void){
        // update model
        updateUI();
    }

    public deleteCommandFromArduino(){
        // TODO
    }
}
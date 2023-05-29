import { Arduino } from "../model/core/Arudino";
import { Command } from "../model/core/Command";
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

    public getCommandsForArduino(arduino: Arduino){
        console.log(arduino.uid)
        fetch(this.rootUrl + `/commands/${arduino.uid}`)
        .then(res => res.json())
        .then(json => {
            const commands: Command[] = json.commands;
            StateManager.commands.publish(commands);
            console.log(commands.length)
        })
        .catch(err => console.error(err))
    }

    /**
     * 
     * @param updateUI must update UI
     */
    public scheduleCommandForArduino(arduino: Arduino, updateUI: () => void){
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify('')
        }
        
        fetch(this.rootUrl + `/command/${arduino.uid}/VisualStimulus`, options)
        .then(_ => updateUI())
        .catch(err => {
            console.error(err)
            return false
        });
    }

    public deleteCommandFromArduino(){
        // TODO
    }
}
import { Device } from "../model/core/Device";
import { Command } from "../model/core/Command";
import StateManager from "./publishers/StateManager";

export class ApiController {
    
    public static readonly instance = new ApiController();
    private rootUrl = "http://172.20.10.3:8080";

    private constructor() {}

    public getDevices(){
        fetch(this.rootUrl + "/arduinos")
        .then(res => res.json())
        .then(json => {
            const arduinos: Device[] = json.arduinos;
            StateManager.devices.publish(arduinos)
        })
        .catch(err => console.error(err))
    }

    public getCommandsForDevice(device: Device){
        fetch(this.rootUrl + `/commands/${device.uid}`)
        .then(res => res.json())
        .then(json => {
            const commands: Command[] = json.commands;
            StateManager.commands.publish(commands);
        })
        .catch(err => console.error(err))
    }

    /**
     * 
     * @param updateUI must update UI
     */
    public scheduleCommandForDevice(device: Device, command:Command, updateUI: () => void){
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify('')
        }
        
        fetch(this.rootUrl + `/command/${device.uid}/${command.name}`, options)
        .then(_ => updateUI())
        .catch(err => {
            console.error(err)
            return false
        });
    }

    public deleteCommandFromDevice(){
        // TODO
    }
}
import { Device } from "../model/core/Device";
import { Command } from "../model/core/Command";
import StateManager from "./publishers/StateManager";
import { EogDataType } from "../model/eog/Types";
import { EogData } from "../model/eog/EogData";

export class ApiController {
    
    public static readonly instance = new ApiController();
    private rootUrl = "http://172.20.10.3:8080";

    private constructor() {}

    public getDevices(){
        fetch(this.rootUrl + "/devices")
        .then(res => res.json())
        .then(json => {
            const devices: Device[] = json.devices;
            StateManager.devices.publish(devices)
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
        .catch(err => {
            console.error(err)
            return false
        });

        updateUI();
    }

    public getEogData(streamId: number){
        fetch(this.rootUrl + `/eog/${streamId}`)
        .then(res => res.json())
        .then(json => {
            const stream: EogDataType[] = json.stream;
            // we have to extract to a type, this is becuase class serialise without the getters and this causes issues
            const streamForState: EogDataType[] = [];

            for (let data of stream){
                streamForState.push({
                    voltage: data.voltage,
                    time: data.time
                })
            }

            while (streamForState.length > 500){
                streamForState.shift();
            }

            StateManager.eogStream.publish(streamForState);
        })
        .catch(err => console.error(err))
    }
}
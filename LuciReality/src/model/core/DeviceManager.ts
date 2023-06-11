import { Device } from "./Device";
import { Command } from "./Command";

export class DeviceManager {

    private devices: Device[] = [];
    public static readonly instance: DeviceManager = new DeviceManager();

    private constructor(){}

    public getDevices(): Device[]{
        const tmpdevices = this.devices;
        return tmpdevices;
    }

    /**
     * You will have to unwrap the optional
     * @param id the device id you want to get
     * @returns the device with correct id or undefined
     */
    public getDevice(id: number): Device | undefined {
        return this.devices.filter(a => a.uid == id)[0]
    }

    /**
     * Will only add the device if it does not already exist
     * @param device the device you want to add
     * @returns true if added, otherwise, false
     */
    public addDevice(device: Device): boolean {
        if (this.devices.filter(a => a.uid == device.uid).length >= 1){
            return false;
        }

        this.devices.push(device);

        return true;
    }

    /**
     * Gets the next command for an device 
     * @param id the id of the device
     * @returns the next command
     */
    public getNextCommandForDevice(id: number): Command | undefined {
        let device = this.getDevice(id);
        if (device == undefined){
            return device
        }
        return device.commandSchedular.nextCommand;
    }

    /**
     * Adds a command to an device
     * @param id the id of the device you want to add a command to
     * @param command the command you want to add
     * @returns true if add, otherwise, false
     */
    public addCommandToDevice(id: number, command: Command): boolean {
        if (this.devices.filter(a => a.uid == id).length < 1){
            return false;
        }

        for (let i=0; i<this.devices.length; i++){
            if (this.devices[i].uid == id){
                this.devices[i].commandSchedular.scheduleCommand(command);
            }
        }

        return true;
    }
}
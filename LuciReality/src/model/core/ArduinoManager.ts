import { Arduino } from "./Arudino";
import { Command } from "./Command";


export class ArduinoManager {

    private arduinos: Arduino[] = [];
    public static readonly instance: ArduinoManager = new ArduinoManager();

    private constructor(){}

    public getArduinos(): Arduino[]{
        const tmpArduinos = this.arduinos;
        return tmpArduinos;
    }

    /**
     * You will have to unwrap the optional
     * @param id the arduino id you want to get
     * @returns the arduino with correct id or undefined
     */
    public getArduino(id: number): Arduino | undefined {
        return this.arduinos.filter(a => a.uid == id)[0]
    }

    /**
     * Will only add the arduino if it does not already exist
     * @param arduino the arduino you want to add
     * @returns true if added, otherwise, false
     */
    public addArduino(arduino: Arduino): boolean {
        if (this.arduinos.filter(a => a.uid == arduino.uid).length >= 1){
            return false;
        }

        this.arduinos.push(arduino);

        return true;
    }

    /**
     * Gets the next command for an arduino 
     * @param id the id of the arduino
     * @returns the next command
     */
    public getNextCommandForArduino(id: number): Command | undefined {
        let arduino = this.getArduino(id);
        if (arduino == undefined){
            return arduino
        }
        return arduino.commandSchedular.getNextCommand();
    }

    /**
     * Adds a command to an arduino
     * @param id the id of the arduino you want to add a command to
     * @param command the command you want to add
     * @returns true if add, otherwise, false
     */
    public addCommandToArduino(id: number, command: Command): boolean {
        if (this.arduinos.filter(a => a.uid == id).length < 1){
            return false;
        }

        for (let i=0; i<this.arduinos.length; i++){
            if (this.arduinos[i].uid == id){
                this.arduinos[i].commandSchedular.scheduleCommand(command);
            }
        }

        return true;
    }
}
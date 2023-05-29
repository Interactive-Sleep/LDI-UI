import { Attatchment } from "./Attatchment";
import { Command } from "./Command";

export class CommandSchedular {

    private scheduledCommands: Command[] = [];
    private readonly avaliableAttatchments: Attatchment[];

    public constructor(avaliableAttachments: Attatchment[]){
        this.avaliableAttatchments = avaliableAttachments;
    }

    /**
     * Get all attachments avaliable
     * @returns avaliable attachments
     */
    public getAvailableAttatchments(): Attatchment[]{
        const tmpAttatchments = this.avaliableAttatchments;
        return tmpAttatchments;
    }

    /**
     * Get all scheduled commands
     * @returns all scheduled commands
     */
    public getScheduledCommands(): Command[]{
        const tmpCommands = this.scheduledCommands;
        return tmpCommands;
    }

    public getNextCommand(): Command | undefined {
        const command = this.scheduledCommands.pop()
        return command;
    }

    public addAttachment(attachment: Attatchment) {
        this.avaliableAttatchments.push(attachment);
    }

    /**
     * Adds a command to the end of the queue
     * TODO: add check to see if command can be used with the attachments
     * @param command the command you want to add
     */
    public scheduleCommand(command: Command){
        this.scheduledCommands.push(command);
    }
    
    /**
     * Checks if the command provided is scheduled
     * @param command the command you want to check
     * @returns true if the command is scheduled otherwise false
     */
    public containsCommand(command: Command): boolean{
        let exists: boolean = false;
        this.scheduledCommands.forEach(c => c.name == command.name ? exists = true : null);
        return exists
    }

    /**
     * Deletes an instance of a command
     * @param command the command you want to delete
     * @param instanceNumber the instance of that command, instance just refers to the order it was added. If it was the first
     * command of that type added then it is the 1st instance, if it is the second added then it is the second instance etc.
     * @returns true if the instance exists and was deleted, otherwise false
     */
    public removeCommand(command: Command, instanceNumber: number): boolean {

        // exit early if command does not exist
        if (!this.containsCommand(command)){
            return false;
        }

        let count: number = 0;

        for (let i=0; i < this.scheduledCommands.length; i++){
            if (command.name == this.scheduledCommands[i].name && count == instanceNumber){
                this.scheduledCommands = this.scheduledCommands.filter((_, index) => i != index) // removes command at index i
                return true;  // we return true because we found the instance they want to delete
            }else if (command.name == this.scheduledCommands[i].name){
                count += 1;
            }
        }

        return false;
    }

    /**
     * Deletes all instances of a command from the scheduled commands
     * @param command the command you want to delete
     */
    public removeAllInstancesOfCommand(command: Command){
        this.scheduledCommands = this.scheduledCommands.filter(c => c.name != command.name)
    }
}
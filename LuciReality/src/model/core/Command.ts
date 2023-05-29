import { Instruction } from "./Instruction";

export abstract class Command {

    readonly name: string;
    private readonly instructions: Instruction[]; // this has to be private so that noone can add instructions to a command
    readonly noOfInstructions: number;

    constructor(name: string, instructions: Instruction[]){
        this.name = name;
        this.instructions = instructions;
        this.noOfInstructions = this.instructions.length
    }

    public getInstructions(): Instruction[] {
        const tmpInstructions = this.instructions;
        return tmpInstructions;
    }

}
import { Attatchment } from "./Attatchment";
import { Instruction } from "./Instruction";

export abstract class Command {

    readonly name: string;
    private readonly instructions: Instruction[]; // this has to be private so that noone can add instructions to a command
    public requiredAttatchments: Attatchment[];
    readonly noOfInstructions: number;

    constructor(name: string, instructions: Instruction[], requiredAttatchments: Attatchment[]){
        this.name = name;
        this.instructions = instructions;
        this.requiredAttatchments = requiredAttatchments;
        this.noOfInstructions = this.instructions.length;
    }

    public getInstructions(): Instruction[] {
        const tmpInstructions = this.instructions;
        return tmpInstructions;
    }

}
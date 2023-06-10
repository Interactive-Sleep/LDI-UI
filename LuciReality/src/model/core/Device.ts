import { Attatchment } from "./Attatchment";
import { CommandSchedular } from "./CommandSchedular";

export class Device {

    readonly uid: number;
    private avaliableAttatchments: Attatchment[];
    public commandSchedular: CommandSchedular;

    constructor(uid: number, attatchments: Attatchment[]){
        this.uid = uid;
        this.avaliableAttatchments = attatchments;
        this.commandSchedular = new CommandSchedular(attatchments);
    }

    public get attatchments(): Attatchment[] {
        const tmpAttatchments = this.avaliableAttatchments;
        return tmpAttatchments;
    }

    public addAttatchment(attatchment: Attatchment) {
        this.commandSchedular.addAttachment(attatchment);
    }
}
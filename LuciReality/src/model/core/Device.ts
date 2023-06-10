import { Attatchment } from "./Attatchment";
import { CommandSchedular } from "./CommandSchedular";

export class Device {

    readonly uid: number;
    private attatchments: Array<Attatchment>;
    public readonly commandSchedular: CommandSchedular;

    constructor(uid: number, attatchments: Array<Attatchment>){
        this.uid = uid;
        this.attatchments = attatchments;
        this.commandSchedular = new CommandSchedular(attatchments);
    }

    public getAttatchments(): Attatchment[] {
        const tmpAttatchments = this.attatchments;
        return tmpAttatchments;
    }

    public addAttatchment(attatchment: Attatchment) {
        this.commandSchedular.addAttachment(attatchment);
    }
}
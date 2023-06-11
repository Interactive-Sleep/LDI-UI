export class EogData {

    private voltage: number | null; // sometimes there may be no data recieved
	private time: number;
  
    constructor(microVoltage: number | null, timeSeconds: number){
        this.voltage = microVoltage;
        this.time = timeSeconds;
    }
    
    public get timeSeconds(): number{
        const tmp = this.time;
        return tmp;
    }
    
    public get microVoltage(): number | null{
        const tmp = this.voltage;
        return tmp;
    }
}
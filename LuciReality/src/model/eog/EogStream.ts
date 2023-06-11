import { EogData } from "./EogData";
import { EogDataQueue } from "./EogDataQueue";

export class EogStream {
    private eogDataQueue: EogDataQueue = new EogDataQueue();
    private eogDataStream: EogData[] = [];
 	private time: number = 0;
    private timerCanRun: boolean = true;
    private uuid: number;
  
    public constructor(uuid: number){
        this.uuid = uuid;
    };
    
    public get id(){
        const tmp = this.uuid;
        return tmp;
    }
    
    public get stream(){
        const tmp = this.eogDataStream;
        return tmp;
    }
    
    public addData(signalMicroVolts: number){
        this.eogDataQueue.push(signalMicroVolts); 	
    }
    
    public async timer(){
        // loop while timer is alive
        while(this.timerCanRun){
            // wait 1 second
            await new Promise(resolve => setTimeout(resolve, 1000));
            // continue
            this.time += 1;
            this.eogDataStream.push(new EogData(
                this.eogDataQueue.pop(),
                this.time
            ));  
        }
        
        this.timerCanRun = true;
    }
    
    public killTimer(){
        this.timerCanRun = false;
    }
}
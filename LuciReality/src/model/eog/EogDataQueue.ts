export class EogDataQueue {
  
    private eogDataQueue: number[] = [];
    
    constructor(){};
      
    public get queue(){
        const tmp = this.eogDataQueue;
        return tmp;
    }
    
    public pop(): number | null {
        const firstData = this.eogDataQueue.shift();
        return firstData != undefined ? firstData : null;
    }
    
    public push(microVoltage: number){
        this.eogDataQueue.push(microVoltage);
    }
  }
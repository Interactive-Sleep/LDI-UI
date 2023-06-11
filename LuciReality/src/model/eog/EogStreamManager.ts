import { EogStream } from "./EogStream";

export class EogStreamManager {
  
    public static readonly instance: EogStreamManager = new EogStreamManager();
    
    private streams: EogStream[] = [];
    
    private constructor(){};
    
    public getStream(streamId: number): EogStream | null{
        
        for (let stream of this.streams){
            if (stream.id == streamId){
                return stream;
            }
        }

        return null;
    }

    public createStream(streamId: number): boolean {
        const streamAlreadyExists = this.checkIfStreamExists(streamId);
      
        if (!streamAlreadyExists){
            const newStream = new EogStream(streamId);
            // start the stream timer
            newStream.timer();
            this.streams.push(newStream);
        }
        
        return streamAlreadyExists;
    }
    
    public deleteStream(streamId: number): boolean {
        const streamExists = this.checkIfStreamExists(streamId);
      
        if (streamExists){
            this.streams = this.streams.filter(s => s.id != streamId);
        }
            
        return false;
    }
    
    public addDataToStream(streamId: number, microVoltage: number): boolean {
        const streamExists = this.checkIfStreamExists(streamId);

        if (!streamExists){
            return false;
        }

        // add data if id is equal
        this.streams.map(stream => {
            if (stream.id == streamId){
                stream.addData(microVoltage);
            }
            return stream;
        });

        return streamExists;
    }

    private checkIfStreamExists(streamId: number): boolean {
      
        for (let stream of this.streams){
            if (stream.id == streamId){
            return true;
            }
        }

        return false;
    }
    
  }
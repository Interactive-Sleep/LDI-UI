
export class Instruction {

    readonly code: number;
    private payload: Object;
    private payloadCount: number;
    // TODO: add attachments required to complete instruction

    constructor(code: number, payload: Object = {}){
        this.code = code;
        this.payload = payload;
        this.payloadCount = Object.keys(payload).length;
    }

    public getPayload(): Object {
        const tmpPayload = this.payload;
        return tmpPayload;
    }

    public getPayloadCount(): number {
        const tmpCount = this.payloadCount;
        return tmpCount;
    }

    public setPayload(payload: Object){
        this.payloadCount = Object.keys(payload).length;
        this.payload = payload;
    }

}


import LuciStack from "./LuciStack";

/**
 * The UI element for an account
 */
class LuciInterface {

    constructor(
        public readonly name: string,
        public readonly stacks: LuciStack[]
    ) { }

}

export default LuciInterface;
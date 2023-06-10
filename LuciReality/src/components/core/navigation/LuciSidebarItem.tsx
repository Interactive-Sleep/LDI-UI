import UUID from "../../../model/util/UUID";

/**
 * A sidebar item, this will be displayed in the sidebar on tablet.
 * Pass props must update the props you require for the next screen.
 */
class LuciSidebarItem {

    public readonly id: UUID = UUID.generate();

    constructor(
        public readonly component: React.FC,
        public readonly passProps: () => void,
        public readonly searchableString?: string,
    ) { }

}

export default LuciSidebarItem;
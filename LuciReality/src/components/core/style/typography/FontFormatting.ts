import { FontWeight, TextAlign, TextAlignVertical } from "./FontStyleProps"

interface FormattingStyleProps {
    fontWeight: FontWeight,
    textAlign: TextAlign,
    textAlignVertical: TextAlignVertical
};

export class FontFormatting {

    private fontWeight: FontWeight;
    private textAlignment: TextAlign;
    private textAlignmentVeritcle: TextAlignVertical;

    constructor(fontWeight: FontWeight, textAlignment: TextAlign = "left", textAlignmentVerticle: TextAlignVertical = "top"){
        this.fontWeight = fontWeight;
        this.textAlignment = textAlignment;
        this.textAlignmentVeritcle = textAlignmentVerticle;
    }
    
    get getFormattingStyleProps(): FormattingStyleProps {
        return {
            fontWeight: this.fontWeight,
            textAlign: this.textAlignment,
            textAlignVertical: this.textAlignmentVeritcle
        }
    }
}

export type FontWeight =
    "normal" |
    "bold" |
    "100" |
    "200" |
    "300" |
    "400" |
    "500" |
    "600" |
    "700" |
    "800" |
    "900"

export type TextAlign =
    "auto" |
    "left" |
    "right" |
    "center" |
    "justify"

export type TextAlignVertical =
    "auto" |
    "top" |
    "bottom" |
    "center"

export interface FontStyleProps {
    fontSize: number,
    fontStyle: String,
    fontWeight: FontWeight,
    color: String,
    textAlignment: TextAlign,
    textAlignmentVerticle: TextAlignVertical
}
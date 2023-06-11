import React from "react";
import { LineChart } from "react-native-chart-kit";
import { ViewStyle } from "react-native/types";
import { Environment } from "../../../../../state/environment/Environment";
import { LuciScreenOrientation } from "../../../../../state/environment/types/LuciScreenOrientation";
import { ColourProvider } from "../../../style/ColourProvider";

interface Props {
    lineData: {
        labels: string[],
        datasets: [{
            data: number[],
            strokeWidth: number
        }]
    },
    xAxisLabel: string
    yAxisLabel?: string,
    width?: number,
    height?: number,
    style?: ViewStyle
};

export const LuciGraph: React.FC<Props> = ({ 
    lineData,
    xAxisLabel,
    yAxisLabel = "",
    width = Environment.instance.getScreenOrientation() == LuciScreenOrientation.Landscape ? Environment.instance.getScreenWidth()/1.3 : Environment.instance.getScreenWidth(), 
    height = Environment.instance.getScreenHeight()/3,
    style 
}) => {
    return (
        <LineChart
            data={lineData}
            width={width}
            height={height}
            yAxisLabel={yAxisLabel}
            xAxisLabel={xAxisLabel}
            chartConfig={{
                backgroundColor: ColourProvider.instance.cardBackground.getColour(),
                backgroundGradientFrom: ColourProvider.instance.cardBackground.getColour(),
                backgroundGradientTo: ColourProvider.instance.cardBackground.getColour(),
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => ColourProvider.instance.secondaryButton.getColour(),
            }}
            style={style}
        />
    )
}
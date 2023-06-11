import React from "react";
import { LineChart } from "react-native-chart-kit";
import { ViewStyle } from "react-native/types";
import { Environment } from "../../../../../state/environment/Environment";
import { BaseDimensions } from "../../../style/BaseDimensions";
import { ColourProvider } from "../../../style/ColourProvider";

interface Props {
    lineData: {
        labels: string[],
        datasets: [{
            data: number[],
            strokeWidth: number
        }]
    },
    yAxisLabel: string,
    xAxisLabel: string
    width?: number,
    height?: number,
    style?: ViewStyle
};

export const LuciGraph: React.FC<Props> = ({ 
    lineData,
    yAxisLabel,
    xAxisLabel,
    width = Environment.instance.getScreenWidth(), 
    height = 300,
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
                backgroundColor: ColourProvider.instance.accent.getColour(),
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => ColourProvider.instance.secondaryButton.getColour(),
                style: {
                  borderRadius: 15
                }
            }}
            style={[
                { borderRadius: 10},
                style
            ]}
        />
    )
}
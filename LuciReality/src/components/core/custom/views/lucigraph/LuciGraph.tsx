import React from "react";
import { View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { ViewStyle } from "react-native/types";
import { Environment } from "../../../../../state/environment/Environment";
import { LuciScreenOrientation } from "../../../../../state/environment/types/LuciScreenOrientation";
import { ColourProvider } from "../../../style/ColourProvider";
import { LuciContainer } from "../../containers/lucicontainer/LuciContainer";

interface Props {
    lineData: {
        labels: string[],
        datasets: [{
            data: number[],
            strokeWidth: number
        }]
    },
    xAxisLabel?: string
    yAxisLabel?: string,
    width?: number,
    height?: number,
    style?: ViewStyle
};

export const LuciGraph: React.FC<Props> = ({ 
    lineData,
    xAxisLabel="",
    yAxisLabel = "",
    width = Environment.instance.getScreenOrientation() == LuciScreenOrientation.Landscape ? Environment.instance.getScreenWidth()/1.3 : Environment.instance.getScreenWidth()/1.1, 
    height = Environment.instance.getScreenHeight()/2,
    style 
}) => {
    return (
        <LuciContainer
            style={{
                backgroundColor: ColourProvider.instance.cardBackground.getColour(),
                height: height + 20,
            }}
        >
            <LineChart
                data={lineData}
                withDots={false}
                withInnerLines={false}
                fromZero={true}
                width={width}
                height={height}
                yAxisLabel={yAxisLabel}
                xAxisLabel={xAxisLabel}
                chartConfig={{
                    backgroundColor: ColourProvider.instance.cardBackground.getColour(),
                    backgroundGradientFrom: ColourProvider.instance.cardBackground.getColour(),
                    backgroundGradientTo: ColourProvider.instance.cardBackground.getColour(),
                    decimalPlaces: 0, // optional, defaults to 2dp
                    color: (opacity = 1) => ColourProvider.instance.secondaryButton.getColour(),
                    propsForBackgroundLines: {
                        strokeWidth: 0
                    },
                }}
                style={style}
            />
        </LuciContainer>
    )
}
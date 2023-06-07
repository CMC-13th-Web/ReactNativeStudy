import ColorButton from "components/atoms/buttons/ColorButton/ColorButton";
import React from "react";
import { View, Text } from "react-native";
import { useCountStore } from "store/count";
import { counterCardStyles } from "./CounterCard.style";

const CounterCard = () => {
  const { increaseCountState, decreaseCountState, count } = useCountStore();
  return (
    <View style={counterCardStyles.container}>
      <ColorButton
        label={"증가"}
        color={"blue"}
        handleClick={increaseCountState}
      />
      <Text style={counterCardStyles.countInfo}>{count}</Text>
      <ColorButton
        label={"감소"}
        color={"red"}
        handleClick={decreaseCountState}
      />
    </View>
  );
};

export default CounterCard;

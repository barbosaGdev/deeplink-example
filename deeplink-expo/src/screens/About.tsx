import { StackScreenProps } from "@react-navigation/stack";
import React, { FC } from "react";
import { Text, View } from "react-native";
import { RootStackParamList } from "../routes/MainNavigator";

const About: FC<StackScreenProps<RootStackParamList, "About">> = ({
  route
}) => {
  const { code } = route.params;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>This screen only can access by deeplink: {code} </Text>
    </View>
  );
};

export default About;

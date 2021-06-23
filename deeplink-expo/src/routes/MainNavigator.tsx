import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import About from "../screens/About";

export type RootStackParamList = {
  Home: undefined;
  About: {
    code: string;
  };
};

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export const MainNavigator: FC = () => {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
      <Screen name="About" component={About} />
    </Navigator>
  );
};

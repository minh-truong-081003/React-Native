import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import TabNavigator from "./TabNavigator";

const MainNavigator = () => {
    const Stack = createNativeStackNavigator();
    //main goi tab
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="Main" component={TabNavigator} />
        </Stack.Navigator>
    );
};

export default MainNavigator;
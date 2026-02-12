import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MerchantProvider } from "./src/context/MerchantContext";
import MerchantList from "./src/screens/MerchantList";
import MerchantDetail from "./src/screens/MerchantDetail";

const Stack = createStackNavigator();

export default function App() {
  return (
    <MerchantProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="MerchantList" component={MerchantList} />
          <Stack.Screen name="MerchantDetail" component={MerchantDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </MerchantProvider>
  );
}
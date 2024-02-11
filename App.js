import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import HomeScreen from "./Screens/HomeScreen";
import { Provider } from "react-redux";
import { store } from "./ReduxSlice/store";
import Cars from "./Screens/Cars";
import Screens from "./Screens/Screens";

const App = () => {
  const [state, setstate] = useState(0);
  return (
    <Provider store={store}>
      {state === 0 && <HomeScreen setstate={setstate} />}
      {state === 1 && <Cars setstate={setstate} />}
      {state === 2 && <Screens setstate={setstate} />}
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});

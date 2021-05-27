import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import Landing from "./components/auth/Landing";
import { StyleSheet, View, Text } from "react-native";
import reducer, { initialState } from "./StateHooks/reducer.";
import { StateProvider } from "./StateHooks/StateProvider";
import Main from "./components/Main";
const App = () => {
  const [loaded, setLoaded] = useState<boolean>();
  const [id, setId] = useState<string>();
  const [loggedIn, setLoggedIn] = useState<boolean>();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        setLoggedIn(false);
        setLoaded(true);
      } else {
        setLoggedIn(true);
        setLoaded(true);
        setId(user.uid);
        console.log(user.email);
        console.log(user.uid);

      }
    });
  }, []);

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <View>
        {id && <Main data={id}/>}
        {loggedIn ? (
          <Text>{`This is ${JSON.stringify(loggedIn)}`}</Text>
        ) : (
          <Landing />
        )}
      </View>
    </StateProvider>
  );
};
export default App;

const styles = StyleSheet.create({});

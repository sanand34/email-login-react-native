import React, { useEffect, useState } from "react";
import firebase from "../firebase";
import { View, Text } from "react-native";
import { useStateValue } from "../StateHooks/StateProvider";
import { actionTypes } from "../StateHooks/reducer.";

const Main = ({data}:{data:string}) => {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    const starCountRef = firebase
      .database()
      .ref("users/" + data);

    starCountRef.on("value", (snapshot) => {
      const data = snapshot.val();
      if (data) {
        dispatch({
          type: actionTypes.SET_USER,
          user: data,
        });
      } else {
        console.log("Document does not exist");
      }
    });
  }, []);

  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default Main;

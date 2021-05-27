import React, { useState, useEffect } from "react";
import { View, TextInput, Button } from "react-native";
import firebase from "../../firebase";

type AppProps = { navigation: any };
const Login = ({ navigation }: AppProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const signin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => [error]);
  };

  return (
    <View>
      <Button
        title="Register"
        onPress={() => {
          navigation.navigate("Register");
        }}
      />
      <TextInput
        placeholder="email"
        onChangeText={(email) => {
          setEmail(email);
        }}
      />
      <TextInput
        placeholder="password"
        onChangeText={(password) => {
          setPassword(password);
        }}
      />
      <Button
        title="Login"
        onPress={() => {
          signin();
        }}
      />
    </View>
  );
};

export default Login;

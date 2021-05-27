import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
type AppProps = { navigation: any };
import firebase from "../../firebase";
import { db } from "../../firebase";
const Register = ({ navigation }: AppProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const signup = () => {
    const auth = firebase.auth();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
        db.ref("users/" + auth.currentUser?.uid).set({
          email: email,
          name: name,
        });
      })
      .catch((error) => [error]);
  };

  return (
    <View>
      <Button
        title="Login"
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
      <TextInput
        placeholder="name"
        onChangeText={(name) => {
          setName(name);
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
        title="Register"
        onPress={() => {
          signup();
        }}
      />
    </View>
  );
};

export default Register;

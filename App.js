import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";

export default function App() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [gender, setGender] = useState();
  const [status, setStatus] = useState();
  // ham post
  function mGet() {
    const data = {
      name: name,
      email: email,
      gender: gender,
      status: status,
    };
    fetch("https://gorest.co.in/public-api/users", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
        Authorization:
          "Bearer 002296749fff5f01c76e73e62abb580856873fe0f030a6dc04c4e6717dd50d12",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json.code);
        console.log(json.data);
        if (json.code === 201) {
          alert("Thành công!");
        } else if (json.code === 422) {
          alert("Email đã tồn tại!");
        } else {
          alert("Lỗi!");
        }
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  }
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          source={require("./cat.png")}
          style={{ width: 100, height: 100 }}
        />
      </View>
      <View style={styles.content}>
        <TextInput
          placeholder="Username"
          style={styles.item}
          onChangeText={(item) => {
            setName(item);
            console.log({ name });
          }}
        />
        <TextInput
          placeholder="Email"
          style={styles.item}
          onChangeText={(item) => {
            setEmail(item);
            console.log({ email });
          }}
        />
        <TextInput
          placeholder="Gender"
          style={styles.item}
          onChangeText={(item) => {
            setGender(item);
            console.log({ gender });
          }}
        />
        <TextInput
          placeholder="Status"
          style={styles.item}
          onChangeText={(item) => {
            setStatus(item);
            console.log({ status });
          }}
        />
      </View>
      <Button
        title="Register"
        onPress={() => {
          mGet();
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7e4f0",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  logo: {
    marginTop: 50,
  },
  content: {
    marginTop: 50,
    marginBottom: 20,
  },
  item: {
    width: 250,
    height: 40,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 2,
    marginBottom: 5,
  },
});

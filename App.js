import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  //declare useState
  const [courseGoals, setCourseGoals] = useState([]);

  //function to add enter goal into currentGoals
  const addGoHandler = (enteredGoal) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), value: enteredGoal },
    ]);
  };

  const removeGoHanlder = (goalID) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalID);
    });
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGo={addGoHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoHanlder}
            title={itemData.item.value}
          />
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  myHeaderStyle: {
    color: "white",
    backgroundColor: "#3283fc",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    borderWidth: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  screen: {
    padding: 40,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderBottomWidth: 1,
    padding: 10,
  },
  listItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#c0ede2",
    borderColor: "blue",
    borderWidth: 1,
  },
  buttonStyle: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

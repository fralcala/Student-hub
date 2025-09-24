import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>HomeScreen</Text>

      {/* <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile")}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  heading: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 15,
  },
});

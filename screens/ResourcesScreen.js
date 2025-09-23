import { View, Text, StyleSheet } from "react-native";

export default function ResourcesScreen({ route }) {
  const { resource } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{resource.name}</Text>
      <Text style={styles.description}>{resource.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 15,
  },

  description: {
    fontSize: 16,
    textAlign: "center",
  },
});

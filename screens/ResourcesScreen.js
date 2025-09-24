import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";

const resourceData = [
  { id: "1", name: "Resource 1", description: "This is Resource 1" },
  { id: "2", name: "Resource 2", description: "This is Resource 2" },
  { id: "3", name: "Resource 3", description: "This is Resource 3" },
];

export default function ResourcesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>ResourcesScreen</Text>
      <FlatList
        data={resourceData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={styles.card}
            onPress={() => navigation.navigate("Details", { resource: item })}
          >
            <Text style={styles.cardTitle}>{item.name}</Text>
          </Pressable>
        )}
      />
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

  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },

  card: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
  },
});

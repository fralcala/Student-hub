import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";

const resourceData = [
  {
    id: "1",
    name: "My Schedule",
    description: "This Is to check when your classes are scheduled",
  },
  {
    id: "2",
    name: "My Assignments",
    description:
      "This is to help you keep track of your assignments and due dates",
  },
  {
    id: "3",
    name: "Advisors",
    description:
      "This is to connect with your advisors. They can help you with planning your academic path, choosing courses, and addressing any concerns you may have.",
  },
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
    backgroundColor: "#ffffffff",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  cardTitle: {
    textAlign: "center",
    fontSize: 18,
  },
});

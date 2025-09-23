import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Button,
  FlatList,
} from "react-native";

const resourceData = [
  { id: "1", name: "Resource 1", description: "This is Resource 1" },
  { id: "2", name: "Resource 2", description: "This is Resource 2" },
  { id: "3", name: "Resource 3", description: "This is Resource 3" },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>HomeScreen</Text>
      <FlatList
        data={resourceData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={styles.card}
            onPress={() => navigation.navigate("Resources", { resource: item })}
          >
            <Text style={styles.cardTitle}>{item.name}</Text>
          </Pressable>
        )}
      />
      <Button
        title="Go to Resources"
        onPress={() => navigation.navigate("Resources")}
      />
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

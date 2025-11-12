import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  SafeAreaView,
  StatusBar
} from "react-native";

const categories = [
  "Anniversary",
  "Birthday",
  "Engagement",
  "House Warming",
  "Stage Events",
  "Cultural Events",
  "Corporate Parties",
  "Wedding",
  "Naming Ceremony",
  "Other"
];

export default function BookScreen({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filteredCategories, setFilteredCategories] = useState(categories);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);

    switch (category) {
      case "Anniversary":
        navigation.navigate("Anniversary");
        break;
      case "Birthday":
        navigation.navigate("Birthday");
        break;
      case "Engagement":
        navigation.navigate("Engagement");
        break;
      case "House Warming":
        navigation.navigate("HouseWarming");
        break;
        case "Stage Events":
        navigation.navigate("StageEvents");
        break;
        case "Corporate Parties":
        navigation.navigate("CorporateParties");
        break;
        case "Cultural Events":
        navigation.navigate("CulturalEvents");
        break;
        case "Wedding":
        navigation.navigate("Wedding");
        break;
        case "Naming Ceremony":
        navigation.navigate("NamingCeremony");
        break;
      default:
        navigation.navigate("EventDetails", { category });
    }
  };

  const renderCategoryItem = ({ item }) => {
    const isSelected = item === selectedCategory;

    return (
      <TouchableOpacity
        style={[
          styles.option,
          isSelected && styles.optionSelected
        ]}
        onPress={() => handleSelectCategory(item)}
      >
        <Text
          style={[
            styles.optionText,
            isSelected && styles.optionTextSelected
          ]}
        >
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" backgroundColor="#000" />

      
      <View style={styles.header}>
        <Text style={styles.title1}>FootsyPop</Text>

        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={() => setSearchVisible(true)}>
            <Ionicons name="search" size={24} color="white" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      
      {searchVisible && (
        <View style={styles.searchBox}>
          <Ionicons name="search" size={20} color="#d1d5db" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search events..."
            placeholderTextColor="#9ca3af"
            value={searchText}
            onChangeText={(text) => {
              setSearchText(text);
              const results = categories.filter((item) =>
                item.toLowerCase().includes(text.toLowerCase())
              );
              setFilteredCategories(results);
            }}
          />

          <TouchableOpacity
            onPress={() => {
              setSearchVisible(false);
              setSearchText("");
              setFilteredCategories(categories);
            }}
          >
            <Ionicons name="close" size={22} color="#d1d5db" />
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.container}>
        <Text style={styles.title}>Book Your Event</Text>
        <Text style={styles.subtitle}>Choose an Event Type to Proceed</Text>

        <FlatList
          data={filteredCategories}
          keyExtractor={(item) => item}
          numColumns={2}
          renderItem={renderCategoryItem}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000", 
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#000",
    paddingHorizontal: 18,
    paddingVertical: 16,

    borderBottomWidth: 0.6,
    borderBottomColor: "#ffffff22",
  },

  title1: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    letterSpacing: 1,
    fontFamily: "LobsterTwo_400Regular",
  },

  headerIcons: {
    flexDirection: "row",
  },

  icon: {
    marginLeft: 18,
  },

  container: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "white",
    marginTop: 10,
  },

  subtitle: {
    fontSize: 16,
    color: "#e5e7eb",
    marginBottom: 25,
  },

  list: {
    paddingBottom: 100,
  },

  
  option: {
    backgroundColor: "#111827",
    borderRadius: 18,
    width: 160,
    height: 155,
    marginHorizontal: 8,
    marginBottom: 18,

    justifyContent: "center",
    alignItems: "center",

    borderWidth: 1,
    borderColor: "#ffffff22",

    shadowColor: "#fff",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8,
  },

  optionSelected: {
    backgroundColor: "#1f2937",
    borderColor: "#60a5fa",
    elevation: 12,
  },

  optionText: {
    color: "#e5e7eb",
    fontSize: 17,
    fontWeight: "600",
    textAlign: "center",
  },

  optionTextSelected: {
    color: "#60a5fa",
  },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1f2937",
    padding: 12,
    borderRadius: 14,
    margin: 15,
    borderWidth: 1,
    borderColor: "#ffffff22",
  },

  searchInput: {
    color: "white",
    fontSize: 16,
    marginLeft: 10,
    flex: 1,
  },
});

import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, StyleSheet, FlatList,SafeAreaView,StatusBar } from "react-native";
// (No need for Alert import anymore)

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


const GRAY = "#2d3748";


// Ensure you receive the navigation prop
export default function BookScreen({ navigation }) { 
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleSelectCategory = (category) => {
  setSelectedCategory(category);

  switch (category) {
    case "Anniversary":
      navigation.navigate('Anniversary');

      break;
    case "Birthday":
      navigation.navigate('Birthday'); 
      break;
    case "Engagement":
      navigation.navigate("EventDetails", { category }); 
      break;
    case "House Warming":
      navigation.navigate("EventDetails", { category }); 
      break;
    case "Stage Events":
      navigation.navigate("EventDetails", { category });
      break;
    case "Cultural Events":
      navigation.navigate("EventDetails", { category });
      break;
    case "Corporate Parties":
      navigation.navigate("EventDetails", { category });
      break;
    case "Wedding":
      navigation.navigate("EventDetails", { category });
      break;
    case "Naming Ceremony":
      navigation.navigate("EventDetails", { category });
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
        <StatusBar style="light" backgroundColor="#0077cc" translucent={false} />
                  <View style={styles.header}>
                  <Text style={styles.title1}>FootsyPop</Text>
          
                  <View style={styles.headerIcons}>
                    <TouchableOpacity onPress={() => alert("Working on this feature!")}>
                      <Ionicons name="search" size={24} color="white" style={styles.icon} />
                    </TouchableOpacity>
          
                    <TouchableOpacity onPress={() => alert("Working on this feature!")}>
                      <Ionicons name="call" size={24} color="white" style={styles.icon} />
                    </TouchableOpacity>
                  </View>
                </View>

        <View style={styles.container}>
          
            <Text style={styles.title}>Book Your Event</Text>
            <Text style={styles.subtitle}>Choose an Event Type to Proceed</Text>

            <FlatList
                data={categories}
                keyExtractor={(item) => item}
                numColumns={2}
                
                renderItem={renderCategoryItem}
                contentContainerStyle={styles.list}
            />
        </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#000000",
    paddingHorizontal: 16,
    paddingVertical: 12,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },
  title1: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    letterSpacing: 1,
    fontFamily: "LobsterTwo_400Regular"
  },
  headerIcons: {
    flexDirection: "row",
  },
  icon: {
    marginLeft: 20,
  },
    safeArea: {
    flex: 1,
    backgroundColor: '#060000ff',
    },
    container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    color:'#000000',
    },
    title: {
    fontSize: 28,
    fontWeight: '700',
    color: 'white',
    },
    subtitle: {
    fontSize: 16,
    color: '#ffffffff',
    marginBottom: 30,
    },
    
    option: {
      borderRadius:20,
    backgroundColor: '#1E293B',
    borderRadius: 10,
    width: 155,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 14,
 
    },
    optionText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    },
    
    
});
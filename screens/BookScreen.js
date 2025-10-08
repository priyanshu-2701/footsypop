import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList,SafeAreaView } from "react-native";
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
      navigation.navigate('Wedding');
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
        <View style={styles.container}>
            <Text style={styles.title}>Book Your Event</Text>
            <Text style={styles.subtitle}>Choose an Event Type to Proceed</Text>

            <FlatList
                data={categories}
                keyExtractor={(item) => item}
                numColumns={1}
                
                renderItem={renderCategoryItem}
                contentContainerStyle={styles.list}
            />
        </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    safeArea: {
    flex: 1,
    backgroundColor: '#F2F4F7',
    },
    container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    },
    title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000',
    },
    subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 30,
    },
    row: {
    justifyContent: 'space-between',
    marginBottom: 20,
    },
    option: {
    backgroundColor: '#1E293B',
    borderRadius: 10,
    width: 280,
    height: 50,
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
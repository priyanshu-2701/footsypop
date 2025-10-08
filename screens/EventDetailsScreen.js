import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const PRIMARY_BLUE = "#1c93ed";

export default function EventDetailsScreen({ route, navigation }) {
  
  const { category } = route.params;

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{category}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.greetingText}>Coming Soon!</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c2530", 
  },
  header: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1c2530',
    borderBottomWidth: 1,
    borderBottomColor: '#2d3748',
  },
  backButton: {
    marginRight: 15,
  },
  headerTitle: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "700",
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greetingText: {
    fontSize: 20,
    color: PRIMARY_BLUE,
    fontWeight: '600',
    marginBottom: 15,
    textAlign: 'center',
  },
  infoText: {
    fontSize: 16,
    color: '#ccc',
    textAlign: 'center',
    marginBottom: 40,
  },
  bookButton: {
    backgroundColor: PRIMARY_BLUE,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  card: {
  backgroundColor: '#fff',
  borderRadius: 12,
  marginBottom: 20,
  overflow: 'hidden',
  width: '100%',
  shadowColor: '#000',
  shadowOpacity: 0.2,
  shadowRadius: 5,
  elevation: 5,
},
cardImage: {
  width: '100%',
  height: 180,
},
cardInfo: {
  padding: 10,
  backgroundColor: '#111827',
},
cardTitle: {
  fontSize: 16,
  fontWeight: '700',
  color: '#fff',
  marginBottom: 6,
},
priceRow: {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 8,
},
newPrice: {
  fontSize: 16,
  color: '#00c853',
  fontWeight: '700',
},
oldPrice: {
  fontSize: 14,
  color: '#888',
  textDecorationLine: 'line-through',
},

});
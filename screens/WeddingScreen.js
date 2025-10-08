import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  FlatList, 
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
const PRIMARY_BLUE = "#1c93ed";

export default function WeddingScreen({ navigation }) {
  const decorItems = [
    {
      id: '1',
      title: 'Aaaakaash ',
      image: require('../assets/akash.jpg'),
      price: '₹300',
      oldPrice: '₹3,200',
    },
    {
      id: '2',
      title: 'Rishava ',
      image: require('../assets/rishav.jpg'),
      price: '₹500',
      oldPrice: '₹50',
    },
    {
      id: '3',
      title: 'Motka',
      image: require('../assets/motka.jpg'),
      price: '₹50',
    },
    {
      id: '4',
      title: 'Shanky',
      image: require('../assets/shashank.jpg'),
      price: '₹500',
      oldPrice: '₹12',
    },
  ];

  return (
    
      <View style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Ramdis!</Text>
      </View>
        <FlatList
          data={decorItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={item.image} style={styles.cardImage} />
              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <View style={styles.priceRow}>
                  <Text style={styles.newPrice}>{item.price}</Text>
                  <Text style={styles.oldPrice}>{item.oldPrice}</Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f6f9ff",
  },
  header: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1c2530', 
    borderBottomWidth: 4,
    borderBottomColor: '#f7f8faff',
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
  backgroundColor: '#fdfbfbff',
  borderRadius: 12,
  borderColor: '#fdfbfbff',
  marginBottom: 12,
  overflow: 'hidden',
  width: '100%',
  shadowColor: '#000',
  shadowOpacity: 0.2,
  shadowRadius: 5,
  elevation: 5,
},
cardImage: {
  width: '100%',
  height: 400,
},
cardInfo: {
  padding: 12,
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

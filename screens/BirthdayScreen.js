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

export default function BirthdayScreen({ navigation }) {
  const decorItems = [
    {
      id: '1',
      title: 'Baby theme Decor',
      image: require('../assets/bpic1.png'),
      price: '₹6,599',
      oldPrice: '₹7,599',
    },
    {
      id: '2',
      title: 'Dance Theme Bday Decor',
      image: require('../assets/bpic2.png'),
      price: '₹4,500',
      oldPrice: '₹5,999',
    },
    {
      id: '3',
      title: 'Ring Bday Theme',
      image: require('../assets/bpic3.png'),
      price: '₹8,999',
      oldPrice: '₹9,999',
    },
    {
      id: '4',
      title: 'Red Brown Bday Theme',
      image: require('../assets/bpic4.png'),
      price: '₹2,999',
      oldPrice: '₹3,499',
    },
    {
      id: '5',
      title: 'Golden Decor Theme',
      image: require('../assets/bpic5.png'),
      price: '₹8,999',
      oldPrice: '₹10,500',
    },
    {
      id: '6',
      title: 'Blue Purple Theme Decor',
      image: require('../assets/bpic6.png'),
      price: '₹8,999',
      oldPrice: '₹9,999',
    },
    {
      id: '7',
      title: 'Unicorn Baloon Decor',
      image: require('../assets/bpic7.png'),
      price: '₹6,499',
      oldPrice: '₹7,499',
    },
    {
      id: '8',
      title: 'Purple Theme Bday',
      image: require('../assets/bpic8.png'),
      price: '₹2,999',
      oldPrice: '₹3,499',
    },
    {
      id: '9',
      title: 'Unicorn Theme',
      image: require('../assets/bpic9.png'),
      price: '₹9,999',
      oldPrice: '₹10,999',
    },
    {
      id: '10',
      title: 'Colourful Theme Decor',
      image: require('../assets/bpic10.png'),
      price: '₹8,499',
      oldPrice: '₹9,999',
    },
    {
      id: '11',
      title: 'Multi Colour Bday Theme',
      image: require('../assets/bpic11.png'),
      price: '₹3,400',
      oldPrice: '₹4,000',
    },
    {
      id: '12',
      title: 'Princess Birthday Decor',
      image: require('../assets/bpic12.png'),
      price: '₹14,999',
      oldPrice: '₹16,999',
    },
    {
      id: '13',
      title: 'Black Yellow Bday Decor',
      image: require('../assets/bpic13.png'),
      price: '₹2,300',
      oldPrice: '₹3,500',
    },
    {
      id: '14',
      title: 'Purple Day Theme',
      image: require('../assets/bpic14.png'),
      price: '₹9,499',
      oldPrice: '₹10,000',
    },
    {
      id: '15',
      title: 'Closed Eye Beauty Decor',
      image: require('../assets/bpic15.png'),
      price: '₹9,499',
      oldPrice: '₹11,000',
    },
  ];

  return (
    
      <View style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Birthday</Text>
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

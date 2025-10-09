import React,{useState}from 'react';
import { Ionicons } from '@expo/vector-icons';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  FlatList, 
  SafeAreaView,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

const PRIMARY_BLUE = "#1c93ed";


import { BlurView } from 'expo-blur';
export default function AnniversaryScreen({ navigation }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const decorItems = [
    {
      id: '1',
      title: 'I Love You Bedroom Decor',
      image: require('../assets/pic1.png'),
      price: '₹2,649',
      oldPrice: '₹3,200',
    },
    {
      id: '2',
      title: 'Happy Anniversary Red Theme',
      image: require('../assets/pic2.png'),
      price: '₹2,199',
      oldPrice: '₹3,000',
    },
    {
      id: '3',
      title: 'Happy Anniversary Blue White Gold Decor',
      image: require('../assets/pic3.png'),
      price: '₹3,499',
      oldPrice: '₹4,000',
    },
    {
      id: '4',
      title: 'Happy Valentine Decor',
      image: require('../assets/pic4.png'),
      price: '₹3,500',
      oldPrice: '₹4,100',
    },
    {
      id: '5',
      title: 'Purple Grand Anniversary Decor',
      image: require('../assets/pic5.png'),
      price: '₹3,299',
      oldPrice: '₹3,999',
    },
    {
      id: '6',
      title: 'Happy Anniversary White Black Balloons',
      image: require('../assets/pic6.png'),
      price: '₹2,999',
      oldPrice: '₹3,400',
    },
    {
      id: '7',
      title: 'Happy Anniversary',
      image: require('../assets/pic7.png'),
      price: '₹1,899',
      oldPrice: '₹2,400',
    },
    {
      id: '8',
      title: 'Happy Anniversary',
      image: require('../assets/pic8.png'),
      price: '₹3,199',
      oldPrice: '₹3,899',
    },
    {
      id: '9',
      title: 'Anniversary Balloon Decor',
      image: require('../assets/pic9.png'),
      price: '₹2,599',
      oldPrice: '₹3,000',
    },
    {
      id: '10',
      title: 'Happy Anniversary Green White Balloons',
      image: require('../assets/pic10.png'),
      price: '₹2,999',
      oldPrice: '₹3,500',
    },
  ];
  const handleLongPress = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const handleClose = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  return (
    
      <View style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Anniversary</Text>
        </View>
        <FlatList
          data={decorItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <TouchableOpacity 
              onLongPress={() => handleLongPress(item.image)}
              delayLongPress={200}
            >
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
            </TouchableOpacity>
            </View>
          )}
        />
        <Modal visible={modalVisible} transparent animationType="fade">
        <TouchableWithoutFeedback onPress={handleClose}>
          <View style={styles.modalContainer}>
            <BlurView intensity={60} style={StyleSheet.absoluteFill} tint="dark" />
            {selectedImage && (
              <Image 
                source={selectedImage} 
                style={styles.zoomedImage} 
                resizeMode="contain" 
              />
            )}
          </View>
        </TouchableWithoutFeedback>
      </Modal>
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
    backgroundColor: '#2f4156',
    borderBottomWidth: 5,
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
    paddingTop: 30,
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
    marginTop:10,
  marginLeft: 14,
  width: '93%',
  shadowColor: '#000',      
  shadowOffset: { width: 0, height: 4 }, 
  shadowRadius: 20,           
  elevation: 8,
},
cardImage: { 
borderTopLeftRadius: 22,
width: '100%',
height: 240,
align: 'center', 
},
cardInfo: {
  padding: 6,
  backgroundColor: '#2f4156',
  
  borderBottomRightRadius: 22,
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
modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  zoomedImage: {
    width: '90%',
  height: '70%',
  borderRadius: 20,          
  shadowColor: '#000',
  shadowOpacity: 0.25,
  shadowRadius: 10,
  elevation: 10,
  },
});
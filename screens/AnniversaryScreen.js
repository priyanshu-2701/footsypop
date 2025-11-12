import React, { useState } from 'react';
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
  Dimensions,
} from 'react-native';
import { BlurView } from 'expo-blur';

const { width } = Dimensions.get('window');

export default function AnniversaryScreen({ navigation }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const decorItems = [
    { id: '1', title: 'I Love You Bedroom Decor', image: require('../assets/pic1.png'), price: '₹2,649', oldPrice: '₹3,200' },
    { id: '2', title: 'Happy Anniversary Red Theme', image: require('../assets/pic2.png'), price: '₹2,199', oldPrice: '₹3,000' },
    { id: '3', title: 'Happy Anniversary Blue White Gold Decor', image: require('../assets/pic3.png'), price: '₹3,499', oldPrice: '₹4,000' },
    { id: '4', title: 'Happy Valentine Decor', image: require('../assets/pic4.png'), price: '₹3,500', oldPrice: '₹4,100' },
    { id: '5', title: 'Purple Grand Anniversary Decor', image: require('../assets/pic5.png'), price: '₹3,299', oldPrice: '₹3,999' },
    { id: '6', title: 'Anniversary White Black Balloons', image: require('../assets/pic6.png'), price: '₹2,999', oldPrice: '₹3,400' },
    { id: '7', title: 'Happy Anniversary', image: require('../assets/pic7.png'), price: '₹1,899', oldPrice: '₹2,400' },
    { id: '8', title: 'Happy Anniversary', image: require('../assets/pic8.png'), price: '₹3,199', oldPrice: '₹3,899' },
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
    <SafeAreaView style={styles.safearea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={26} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Anniversary Specials</Text>
      </View>

      <View style={styles.banner}>
        <Text style={styles.bannerHeading}>Celebrate Your Special Day</Text>
        <Text style={styles.bannerSub}>
          Elegant decorations crafted with love and luxury.
        </Text>
      </View>

      <FlatList
        data={decorItems}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 40 }}
        
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onLongPress={() => handleLongPress(item.image)}
            delayLongPress={180}
          >
            <Image source={item.image} style={styles.cardImage} />
            <Text style={styles.cardTitle} numberOfLines={2}>
              {item.title}
            </Text>

            <View style={styles.priceRow}>
              <Text style={styles.newPrice}>{item.price}</Text>
              <Text style={styles.oldPrice}>{item.oldPrice}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* Image Zoom Modal */}
      <Modal visible={modalVisible} transparent animationType="fade">
        <TouchableWithoutFeedback onPress={handleClose}>
          <View style={styles.modalContainer}>
            <BlurView intensity={70} tint="dark" style={StyleSheet.absoluteFill} />

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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    paddingTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 18,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    borderBottomColor: '#222',
    borderBottomWidth: 1,
  },
  backButton: {
    marginRight: 15,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#f2f862',
  },

  banner: {
    backgroundColor: "#111",
    padding: 20,
    alignItems: "center",
    marginBottom: 10,
    borderBottomColor: '#f2f86250',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    borderColor: "#333",
    borderWidth: 1,
  },
  bannerHeading: {
    fontSize: 22,
    fontWeight: '700',
    color: '#f2f862',
    marginBottom: 4,
  },
  bannerSub: {
    fontSize: 14,
    color: '#ddd',
  },

  /* Card Grid */
  card: {
    backgroundColor: "#111",
    borderRadius: 16,
    padding: 10,
    marginBottom: 16,
    width: "48%",
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 8,
    borderWidth: 1,
    borderColor: "#222",
    marginHorizontal:"2%",
  },

  cardImage: {
    width: "100%",
    height: 150,
    borderRadius: 12,
  },
  cardTitle: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "700",
    marginTop: 8,
  },

  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 4,
  },
  newPrice: {
    color: "#00e676",
    fontWeight: "700",
    fontSize: 14,
  },
  oldPrice: {
    color: "#777",
    textDecorationLine: "line-through",
    fontSize: 12,
  },

  /* Modal */
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  zoomedImage: {
    width: '88%',
    height: '70%',
    borderRadius: 20,
  },
});

import React, { useState } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  FlatList, 
  SafeAreaView,
  TouchableOpacity, 
  Modal,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from 'expo-blur';
const { width } = Dimensions.get('window');

export default function BirthdayScreen({ navigation }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const decorItems = [
    { id: "1", title: "Baby Theme Decor", image: require("../assets/bpic1.png"), price: "₹6,599", oldPrice: "₹7,599" },
    { id: "2", title: "Dance Theme Decor", image: require("../assets/bpic2.png"), price: "₹4,500", oldPrice: "₹5,999" },
    { id: "3", title: "Ring Birthday Theme", image: require("../assets/bpic3.png"), price: "₹8,999", oldPrice: "₹9,999" },
    { id: "4", title: "Red Brown Theme", image: require("../assets/bpic4.png"), price: "₹2,999", oldPrice: "₹3,499" },
    { id: "5", title: "Golden Decor Theme", image: require("../assets/bpic5.png"), price: "₹8,999", oldPrice: "₹10,500" },
    { id: "6", title: "Blue Purple Theme", image: require("../assets/bpic6.png"), price: "₹8,999", oldPrice: "₹9,999" },
    { id: "7", title: "Unicorn Balloon Decor", image: require("../assets/bpic7.png"), price: "₹6,499", oldPrice: "₹7,499" },
    { id: "8", title: "Purple Theme Decor", image: require("../assets/bpic8.png"), price: "₹2,999", oldPrice: "₹3,499" },
    { id: "9", title: "Unicorn Theme", image: require("../assets/bpic9.png"), price: "₹9,999", oldPrice: "₹10,999" },
    { id: "10", title: "Colourful Theme", image: require("../assets/bpic10.png"), price: "₹8,499", oldPrice: "₹9,999" },
    { id: "11", title: "Multi Colour Theme", image: require("../assets/bpic11.png"), price: "₹3,400", oldPrice: "₹4,000" },
    { id: "12", title: "Princess Decor", image: require("../assets/bpic12.png"), price: "₹14,999", oldPrice: "₹16,999" },
    { id: "13", title: "Black Yellow Theme", image: require("../assets/bpic13.png"), price: "₹2,300", oldPrice: "₹3,500" },
    { id: "14", title: "Purple Day Decor", image: require("../assets/bpic14.png"), price: "₹9,499", oldPrice: "₹10,000" },
    { id: "15", title: "Closed Eye Beauty Decor", image: require("../assets/bpic15.png"), price: "₹9,499", oldPrice: "₹11,000" },
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
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={26} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Birthday Decorations</Text>
      </View>

      {/* Premium Banner */}
      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>Premium Birthday Themes</Text>
        <Text style={styles.bannerSubtitle}>Make your special day unforgettable</Text>
      </View>

      {/* Grid List */}
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

      {/* Zoom Modal */}
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

    </View>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: '#000',
  },
  container: {
    flex: 1,
    backgroundColor: "#0a0a0a",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 18,
    paddingHorizontal: 20,
    backgroundColor: "#000",
    borderBottomWidth: 1,
    borderBottomColor: "#222",
  },
  headerTitle: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "700",
    marginLeft: 15,
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
  bannerTitle: {
    fontSize: 24,
    color: "#f5d76e",
    fontWeight: "800",
  },
  bannerSubtitle: {
    fontSize: 14,
    color: "#ddd",
    marginTop: 4,
  },

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
  closeArea: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
});

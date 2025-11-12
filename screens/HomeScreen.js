import React, { useState } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  Dimensions, 
  TouchableOpacity, 
  SafeAreaView, 
  ScrollView, 
  TextInput 
} from "react-native";
import Swiper from "react-native-swiper";
import { Ionicons } from "@expo/vector-icons";
import ServiceCard from "../components/ServiceCard";

import {
  useFonts,
  LobsterTwo_400Regular,
  LobsterTwo_700Bold,
  LobsterTwo_400Regular_Italic,
  LobsterTwo_700Bold_Italic,
} from "@expo-google-fonts/lobster-two";

const { width } = Dimensions.get("window");

const services = [
  {
    id: "1",
    image: require("../assets/Venue-Management.png"),
    title: "Venue Management",
    description:
      "We excel in sourcing, securing, and managing venues that perfectly align with the theme and requirements of your corporate event.",
  },
  {
    id: "2",
    image: require("../assets/Security-Management.png"),
    title: "Security Management",
    description:
      "Safety is paramount. Our experienced team ensures seamless security arrangements.",
  },
  {
    id: "3",
    image: require("../assets/Event-Branding.png"),
    title: "Event Branding",
    description:
      "Capture attention with powerful event branding, signage, and design.",
  },
  {
    id: "4",
    image: require("../assets/logistics-management.png"),
    title: "Logistics Management",
    description:
      "We handle transport, stay, catering, and equipment for flawless execution.",
  },
  {
    id: "5",
    image: require("../assets/event-production.png"),
    title: "Event Production",
    description:
      "From stage design to lighting, we craft stunning event experiences.",
  },
  {
    id: "6",
    image: require("../assets/onsite-registration.png"),
    title: "Onsite Registration",
    description:
      "Fast, organized attendee check-in using advanced systems.",
  },
  {
    id: "7",
    image: require("../assets/budget-management.png"),
    title: "Budget Management",
    description:
      "We optimize your event budget with smart planning and allocation.",
  },
  {
    id: "8",
    image: require("../assets/technology-integration.png"),
    title: "Technology Integration",
    description:
      "We integrate tech including live streaming, LED walls, and digital displays.",
  },
  {
    id: "9",
    image: require("../assets/content-management.png"),
    title: "Content Management",
    description:
      "Complete storytelling services including scriptwriting and presentations.",
  },
];

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    LobsterTwo_400Regular,
    LobsterTwo_700Bold,
    LobsterTwo_400Regular_Italic,
    LobsterTwo_700Bold_Italic,
  });

  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SafeAreaView style={styles.safeArea}>

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>FootsyPop</Text>

        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={() => setShowSearch(!showSearch)}>
            <Ionicons name="search" size={26} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* SEARCH BAR */}
      {showSearch && (
        <View style={styles.searchBarContainer}>
          <Ionicons name="search" size={22} color="#f2f862" />

          <TextInput
            style={styles.searchInput}
            placeholder="Search services..."
            placeholderTextColor="#aaa"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />

          <TouchableOpacity 
            onPress={() => { 
              setSearchQuery(""); 
              setShowSearch(false); 
            }}>
            <Ionicons name="close" size={22} color="#f2f862" />
          </TouchableOpacity>
        </View>
      )}

      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>

          {/* IMAGE SLIDER */}
          <View style={styles.swiperContainer}>
            <Swiper
              autoplay
              autoplayTimeout={3}
              showsPagination
              dotStyle={styles.dot}
              activeDotStyle={styles.activeDot}
            >
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1653821355736-0c2598d0a63e",
                }}
                style={styles.image}
              />
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3",
                }}
                style={styles.image}
              />
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1651313947982-59d4049e5834",
                }}
                style={styles.image}
              />
            </Swiper>
          </View>

          <View style={styles.contentArea}>
            {/* TITLE SECTION */}
            <View style={styles.mainHeadingContainer}>
              <Text style={styles.mainHeading}>Welcome To Footsypop Events</Text>
              <View style={styles.headingUnderline} />
            </View>

            <Text style={styles.subHeading}>
              Best Event Management Company In Bangalore
            </Text>

            <Text style={styles.bodyText}>
              We specialize in crafting unforgettable experiences for corporate,
              private, and luxury events. Our mission is simple. We make your
              moments extraordinary.
            </Text>

            <Text style={styles.sectionHeading}>
              Services Offered by Footsypop Events
            </Text>

            {/* FILTERED SERVICES */}
            <View style={styles.servicesGrid}>
              {services
                .filter(
                  (s) =>
                    s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    s.description.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((service) => (
                  <ServiceCard
                    key={service.id}
                    imageSource={service.image}
                    title={service.title}
                    description={service.description}
                  />
                ))}
            </View>
          </View>
        </View>
      </ScrollView>
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
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: "#000",
  },

  title: {
    fontSize: 26,
    color: "#f2f862",
    fontFamily: "LobsterTwo_700Bold",
  },

  headerIcons: {
    flexDirection: "row",
  },

  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#111",
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginHorizontal: 16,
    marginTop: -8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#f2f862",
    shadowColor: "#f2f862",
    shadowOpacity: 0.4,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
  },

  searchInput: {
    flex: 1,
    marginHorizontal: 10,
    color: "white",
    fontSize: 16,
  },

  scrollView: {
    backgroundColor: "#000",
  },

  container: {
    backgroundColor: "#000",
  },

  swiperContainer: {
    height: 220,
    marginBottom: 20,
  },

  image: {
    width: width,
    height: 220,
    resizeMode: "cover",
  },

  dot: {
    backgroundColor: "rgba(255,255,255,0.5)",
    width: 7,
    height: 7,
    borderRadius: 4,
    margin: 2,
  },

  activeDot: {
    backgroundColor: "#f2f862",
    width: 7,
    height: 7,
    borderRadius: 4,
    margin: 2,
  },

  contentArea: {
    paddingHorizontal: 20,
  },

  mainHeadingContainer: {
    marginBottom: 20,
  },

  mainHeading: {
    fontSize: 26,
    color: "#f2f862",
    fontWeight: "bold",
  },

  headingUnderline: {
    width: 80,
    height: 4,
    backgroundColor: "#fff",
    marginTop: 4,
  },

  subHeading: {
    fontSize: 20,
    color: "white",
    fontWeight: "700",
    marginBottom: 10,
  },

  bodyText: {
    color: "#ddd",
    lineHeight: 22,
    fontSize: 15,
    marginBottom: 20,
  },

  sectionHeading: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 15,
  },

  servicesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
});

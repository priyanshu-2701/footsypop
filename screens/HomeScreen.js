import React from "react";
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, SafeAreaView,ScrollView  } from "react-native";
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

const COLORS = {
  primaryBlue: "#0077cc",
  headingBlue: "#323793", // A deeper blue/indigo color for the main title
  blackText: "#333",
  lightBackground: "#f9f9f9",
  white: "white",
};
const services = [
  {
    id: '1',
    image: require('../assets/Venue-Management.png'), 
    title: 'Venue Management',
    description: 'We excel in sourcing, securing, and managing venues that perfectly align with the theme and requirements of your corporate event. From grand banquet halls to intimate meeting spaces, we ensure your event venue reflects the essence of your occasion.',
  },
  {
    id: '2',
    image: require('../assets/Security-Management.png'), // Placeholder
    title: 'Security Management',
    description: 'Safety is paramount in any event. Our team of experienced professionals ensures seamless security arrangements, from crowd control to emergency protocols, to guarantee a worry-free experience for all attendees.',
  },
  {
    id: '3',
    image: require('../assets/Event-Branding.png'), // Placeholder
    title: 'Event Branding',
    description: 'Capture attention and leave a lasting impression with our comprehensive event branding solutions. From logo placement to customized signage, we elevate your brand visibility and ensure consistent messaging throughout your event.',
  },
  {
    id: '4',
    image: require('../assets/logistics-management.png'), // Placeholder
    title: 'Logistics Management',
    description: 'Leave the hassle of logistics to us. Our experts handle everything from transportation and accommodation to catering and equipment, ensuring smooth operations behind the scenes, so you can focus on your event objectives.',
  },
  {
    id: '5',
    image: require('../assets/event-production.png'), // Placeholder
    title: 'Event Production',
    description: 'Transform your vision into reality with our expert event production services. From stage design to audiovisual setups, we bring creativity and technical expertise together to create captivating experiences for your audience.',
  },
  {
    id: '6',
    image: require('../assets/onsite-registration.png'), // Placeholder
    title: 'Onsite Registration',
    description: 'Streamline attendee registration and check-in processes with our efficient onsite registration solutions. We leverage technology and experienced staff to ensure a hassle-free entry experience for all attendees.',
  },
  {
    id: '7',
    image: require('../assets/budget-management.png'), // Placeholder
    title: 'Budget Management',
    description: 'Stay within budget without compromising on quality. Our meticulous budget management services help you allocate resources wisely, making the most of your investment and delivering exceptional value for your event.',
  },
  {
    id: '8',
    image: require('../assets/technology-integration.png'), // Placeholder
    title: 'Technology Integration',
    description: 'Harness the power of technology to enhance your event experience. From interactive displays to live streaming, we leverage cutting-edge technology solutions to engage your audience and amplify your message.',
  },
  {
    id: '9',
    image: require('../assets/content-management.png'), // Placeholder
    title: 'Content Management',
    description: 'Deliver compelling content that resonates with your audience. Our content management services cover everything from scriptwriting to presentation design, ensuring your message is clear, impactful, and memorable.',
  },
  
];


export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    LobsterTwo_400Regular,
    LobsterTwo_700Bold,
    LobsterTwo_400Regular_Italic,
    LobsterTwo_700Bold_Italic,
  });
  return (
    <SafeAreaView style={styles.safeArea}>
    <ScrollView style={styles.scrollView}>
    <View style={styles.container}>
      
      {/* 🔹 Custom Header */}
      <View style={styles.header}>
        <Text style={styles.title}>FootsyPop</Text>

        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={() => alert("Working on this feature!")}>
            <Ionicons name="search" size={24} color="white" style={styles.icon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => alert("Working on this feature!")}>
            <Ionicons name="call" size={24} color="white" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      {/* 🔹 Image Slider */}
      <View style={styles.swiperContainer}>
        <Swiper
          autoplay
          autoplayTimeout={3}
          showsPagination={true}
          dotStyle={styles.dot}
          activeDotStyle={styles.activeDot}
        >
          <Image
            source={{ uri: "https://images.unsplash.com/photo-1653821355736-0c2598d0a63e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnQlMjBwbGFubmluZ3xlbnwwfHwwfHx8MA%3D%3D" }}
            style={styles.image}
          />
          <Image
            source={{ uri: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXZlbnQlMjBwbGFubmluZ3xlbnwwfHwwfHx8MA%3D%3D" }}
            style={styles.image}
          />
          <Image
            source={{ uri: "https://images.unsplash.com/photo-1651313947982-59d4049e5834?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
            style={styles.image}
          />
        </Swiper>
      </View>

      <View style={styles.contentArea}>
            {/* 1. Welcome To Footsypop Events (Large, Blue Heading with Underline) */}
            <View style={styles.mainHeadingContainer}>
              <Text style={styles.mainHeading}>Welcome To Footsypop Events</Text>
              <View style={styles.headingUnderline} />
            </View>
            
            {/* 2. Best Event Management Company In Bangalore (Medium, Bold Sub-Heading) */}
            <Text style={styles.subHeading}>Best Event Management Company In Bangalore</Text>
            
            {/* 3. Welcome to Footsypop Events, the top event management company... (Body Text) */}
            <Text style={styles.bodyText}>
              Welcome to Footsypop Events, the top event management company in Bangalore, 
              specializing in crafting unforgettable experiences. We are recognized as the 
              best corporate event management company for our innovative approach and meticulous 
              attention to detail. Our mission is to transform your vision into a spectacular 
              event that resonates and leaves a lasting impact.
            </Text>

            {/* 4. Services Offered by Footsypop Events (Large, Centered, Black Heading) */}
            <Text style={styles.sectionHeading}>Services Offered by Footsypop Events</Text>
            
            {/* 5. For Corporate Event Management in Bangalore, Footsypop Events understands... (Body Text) */}
            <Text style={styles.bodyText}>
              For Corporate Event Management in Bangalore, Footsypop Events understands the significance of flawless execution when it comes to corporate events. Our comprehensive range of services ensures that every aspect of your event is meticulously planned and executed to perfection. Here’s how we can make your corporate event in Bangalore a resounding success:
              {/* You will add more service details here */}
            </Text>
            <View style={styles.servicesGrid}>
              {services.map((service) => (
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
    backgroundColor: "#0077cc", // header bg fills notch
  },
  scrollView: {
    flex: 1,
    backgroundColor: COLORS.lightBackground,
  },
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#0077cc",
    paddingHorizontal: 16,
    paddingVertical: 12,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },
  title: {
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
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  activeDot: {
    backgroundColor: "#0077cc",
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  contentArea: {
    paddingHorizontal: 20,
  },
  mainHeadingContainer: {
    marginBottom: 20,
    
  },
   mainHeading: {
    fontSize: 26, 
    fontWeight: "bold",
    color: COLORS.headingBlue, 
    marginBottom: 5, 
  },
  headingUnderline: {
    width: 80, 
    height: 5,
    backgroundColor: COLORS.primaryBlue, 
  },
  subHeading: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.blackText,
    marginBottom: 20,
  },
  
  bodyText: {
    fontSize: 16, 
    lineHeight: 24, 
    color: COLORS.blackText,
    marginBottom: 20,
  },
  
  sectionHeading: {
    fontSize: 24, 
    fontWeight: "bold",
    color: COLORS.blackText,
    textAlign: "center", 
    marginTop: 20,
    marginBottom: 15,
  },
  servicesGrid: {
    flexDirection: 'row', // Arrange cards in a row
    flexWrap: 'wrap', // Allow cards to wrap to the next line
    justifyContent: 'space-around', // Distribute space between cards
    marginVertical: 10,
    // Negative margin to offset inner card margins, keeping content aligned with paddingHorizontal: 20
    marginHorizontal: -10,
  },
});

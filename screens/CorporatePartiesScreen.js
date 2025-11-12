import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

export default function CorporatePartiesScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safearea}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={26} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Corporate Events</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Banner Section */}
        <View style={styles.bannerContainer}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980",
            }}
            style={styles.bannerImage}
          />
          <BlurView intensity={45} tint="dark" style={styles.bannerOverlay}>
            <Text style={styles.bannerHeading}>
              Corporate Event Organisers
            </Text>
            <Text style={styles.bannerSub}>
              Crafting world-class corporate experiences in Bangalore
            </Text>
          </BlurView>
        </View>

        {/* Content */}
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>About Us</Text>
          <Text style={styles.sectionText}>
            At <Text style={styles.highlight}>Footsypop Events</Text>, we
            specialize in creating extraordinary corporate experiences. From
            conferences and seminars to luxurious product launches and team
            outings — we handle it all with precision and creativity.
          </Text>
          <Text style={styles.sectionText}>
            In a bustling hub like Bangalore, our expert team ensures flawless
            execution and unforgettable impact for your brand.
          </Text>
          <Image 
                        source={require("../assets/ce1.png")}
                        style={styles.decorImage}
                    />
        </View>
        
        
        
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Why Choose Us?</Text>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>🌐 Experience & Expertise</Text>
            <Text style={styles.cardText}>
              With years of experience managing elite corporate events, our team
              knows how to deliver perfection — every time.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>🎯 Customization & Personalization</Text>
            <Text style={styles.cardText}>
              Every event is unique. We tailor every detail to fit your
              objectives, brand, and budget — ensuring a truly personal touch.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>🤝 Vendor Network</Text>
            <Text style={styles.cardText}>
              From venues to catering and entertainment, our strong vendor
              partnerships guarantee the highest quality and seamless service.
            </Text>
          </View>
          <Image 
                        source={require("../assets/ce2.png")}
                        style={styles.decorImage}
                    />
        </View>

        {/* Footsypop Section */}
        <LinearGradient
          colors={["#101010", "#181818", "#111"]}
          style={styles.gradientSection}
        >
          <Text style={styles.sectionHeading}>Footsypop Expertise</Text>

          <View style={styles.bulletRow}>
            <Ionicons name="color-palette" color="#f2f862" size={20} />
            <Text style={styles.bulletText}>
              Creative Design & Branding that reflects your corporate identity
            </Text>
          </View>

          <View style={styles.bulletRow}>
            <Ionicons name="musical-notes" color="#f2f862" size={20} />
            <Text style={styles.bulletText}>
              Engaging Entertainment & Keynote experiences
            </Text>
          </View>

          <View style={styles.bulletRow}>
            <Ionicons name="cog" color="#f2f862" size={20} />
            <Text style={styles.bulletText}>
              On-the-day management with flawless execution
            </Text>
          </View>

          <View style={styles.bulletRow}>
            <Ionicons name="analytics" color="#f2f862" size={20} />
            <Text style={styles.bulletText}>
              Post-event insights & analytics for growth
            </Text>
          </View>
        </LinearGradient>

        {/* CTA Section */}
        <View style={styles.ctaContainer}>
          <Text style={styles.ctaText}>
            Ready to host a corporate event that stands out?
          </Text>
          <TouchableOpacity
            style={styles.ctaButton}
            onPress={() => navigation.navigate("Contact")}
          >
            <Text style={styles.ctaButtonText}>Contact Us Today</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 60 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    paddingTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 18,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000",
    borderBottomColor: "#222",
    borderBottomWidth: 1,
  },
  backButton: {
    marginRight: 15,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#f2f862",
  },
  bannerContainer: {
    position: "relative",
  },
  bannerImage: {
    width: width,
    height: 230,
  },
  bannerOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  bannerHeading: {
    fontSize: 22,
    fontWeight: "700",
    color: "#f2f862",
    textAlign: "center",
    marginBottom: 5,
  },
  bannerSub: {
    fontSize: 14,
    color: "#eee",
    textAlign: "center",
    width: "85%",
  },
  decorImage: {
  width: "100%",
  height: 220,
  borderRadius: 14,
  marginVertical: 14,
  borderWidth: 1,
  borderColor: "#f2f862",
},
  section: {
    padding: 20,
  },
  sectionHeading: {
    fontSize: 20,
    fontWeight: "700",
    color: "#f2f862",
    marginBottom: 10,
  },
  sectionText: {
    color: "#ccc",
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 10,
  },
  highlight: {
    color: "#f2f862",
    fontWeight: "600",
  },
  card: {
    backgroundColor: "#111",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#222",
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 6,
  },
  cardTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 4,
  },
  cardText: {
    color: "#bbb",
    fontSize: 14,
    lineHeight: 20,
  },
  gradientSection: {
    borderRadius: 20,
    paddingVertical: 25,
    paddingHorizontal: 20,
    marginHorizontal: 12,
    marginVertical: 10,
  },
  bulletRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 6,
    gap: 10,
  },
  bulletText: {
    color: "#ccc",
    fontSize: 15,
    flex: 1,
  },
  ctaContainer: {
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 30,
  },
  ctaText: {
    color: "#eee",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 14,
  },
  ctaButton: {
    backgroundColor: "#f2f862",
    borderRadius: 30,
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  ctaButtonText: {
    color: "#000",
    fontSize: 15,
    fontWeight: "700",
  },
});

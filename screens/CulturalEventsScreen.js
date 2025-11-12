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

export default function CulturalEventsScreen({ navigation }) {
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
        <Text style={styles.headerTitle}>Cultural Events</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Banner Section */}
        <View style={styles.bannerContainer}>
          <Image 
              source={require("../assets/ce2.png")}
              style={styles.decorImage}
        />
          <BlurView intensity={45} tint="dark" style={styles.bannerOverlay}>
            <Text style={styles.bannerHeading}>Cultural Event Planners</Text>
            <Text style={styles.bannerSub}>
              Celebrating traditions, unity, and heritage with elegance
            </Text>
          </BlurView>
        </View>

        {/* About Section */}
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>About Our Cultural Events</Text>
          <Text style={styles.sectionText}>
            At <Text style={styles.highlight}>Footsypop Events</Text>, we
            understand the importance of cultural events in bringing people
            together and honoring traditions. Whether it’s a festival, community
            gathering, or religious ceremony, we help create immersive and
            authentic experiences that celebrate your unique heritage.
          </Text>
          <Text style={styles.sectionText}>
            Our expert planners and designers take care of everything — from
            venue selection and décor to catering, lighting, and entertainment —
            ensuring a seamless and unforgettable celebration.
          </Text>
        </View>

        {/* How We Can Help */}
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>
            How We Can Help with Your Cultural Event
          </Text>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>🎨 Theme & Decor</Text>
            <Text style={styles.cardText}>
              We design themes and decorations that reflect your cultural roots
              and create a warm, inviting atmosphere that resonates with your
              guests.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>👘 Traditional Attire</Text>
            <Text style={styles.cardText}>
              From attire guidance to rental and purchase support, we ensure
              everyone is dressed beautifully in authentic traditional wear.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>💃 Cultural Performances</Text>
            <Text style={styles.cardText}>
              Add life to your event with authentic music, dance, and performances
              that showcase the richness of your culture.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>🍽️ Catering & Cuisine</Text>
            <Text style={styles.cardText}>
              We provide catering services that feature traditional cuisine
              options — offering your guests a true taste of your heritage.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>🗓️ Event Planning & Management</Text>
            <Text style={styles.cardText}>
              Our team handles vendor coordination, scheduling, logistics, and
              flow — so your event unfolds beautifully from start to finish.
            </Text>
          </View>
        </View>

        {/* Why Choose Us Section */}
        <LinearGradient
          colors={["#101010", "#181818", "#111"]}
          style={styles.gradientSection}
        >
          <Text style={styles.sectionHeading}>
            Why Choose Footsypop for Cultural Events?
          </Text>

          <View style={styles.bulletRow}>
            <Ionicons name="sparkles" color="#f2f862" size={20} />
            <Text style={styles.bulletText}>
              Deep understanding of cultural diversity and traditions.
            </Text>
          </View>

          <View style={styles.bulletRow}>
            <Ionicons name="ribbon" color="#f2f862" size={20} />
            <Text style={styles.bulletText}>
              Experienced designers who blend authenticity with elegance.
            </Text>
          </View>

          <View style={styles.bulletRow}>
            <Ionicons name="people" color="#f2f862" size={20} />
            <Text style={styles.bulletText}>
              Seamless coordination with local artists and cultural performers.
            </Text>
          </View>

          <View style={styles.bulletRow}>
            <Ionicons name="sparkles-outline" color="#f2f862" size={20} />
            <Text style={styles.bulletText}>
              Full event management — from concept to completion.
            </Text>
          </View>
        </LinearGradient>

        {/* CTA Section */}
        <View style={styles.ctaContainer}>
          <Text style={styles.ctaText}>
            Let’s create a celebration that honors your culture and inspires your
            guests.
          </Text>
          <TouchableOpacity
            style={styles.ctaButton}
            onPress={() => navigation.navigate("Contact")}
          >
            <Text style={styles.ctaButtonText}>Contact Us</Text>
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

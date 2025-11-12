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

export default function StageEventsScreen({ navigation }) {
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
        <Text style={styles.headerTitle}>Stage Events</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Banner Section */}
        <View style={styles.bannerContainer}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1531058020387-3be344556be6",
            }}
            style={styles.bannerImage}
          />
          <BlurView intensity={45} tint="dark" style={styles.bannerOverlay}>
            <Text style={styles.bannerHeading}>Spectacular Stage Events</Text>
            <Text style={styles.bannerSub}>
              Where lights, music, and creativity come alive
            </Text>
          </BlurView>
        </View>

        {/* About Section */}
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Stage Event Management</Text>
          <Text style={styles.sectionText}>
            At <Text style={styles.highlight}>Footsypop Events</Text>, we
            specialize in delivering high-energy, visually stunning stage events
            that captivate audiences and leave a lasting impression. From
            corporate award nights and college fests to cultural shows and
            fashion events, we bring your vision to life with unmatched precision.
          </Text>
        </View>

        {/* What We Offer Section */}
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>What We Offer</Text>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>🎭 Stage Setup & Design</Text>
            <Text style={styles.cardText}>
              Custom-made stage structures, LED walls, floral arrangements, and
              themed backdrops designed to dazzle your audience.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>💡 Lighting & Audio</Text>
            <Text style={styles.cardText}>
              Professional-grade lighting, moving heads, and crisp sound systems
              ensure every moment shines bright and clear.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>🎤 Artist & Performer Management</Text>
            <Text style={styles.cardText}>
              We coordinate with anchors, dancers, singers, and celebrity guests
              to deliver seamless stage performances.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>🎬 Event Flow & Show Direction</Text>
            <Text style={styles.cardText}>
              From cues to transitions, we ensure flawless timing and smooth
              backstage coordination for a world-class show.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>⚙️ Technical Equipment</Text>
            <Text style={styles.cardText}>
              LED screens, projectors, trusses, fog machines, and everything
              needed to create magic on stage.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>🎟️ Rehearsal & Backstage Control</Text>
            <Text style={styles.cardText}>
              Complete backstage management — performer lineup, cue sheets, and
              stage entry control handled with perfection.
            </Text>
          </View>
        </View>

        {/* Why Choose Us Section */}
        <LinearGradient
          colors={["#101010", "#181818", "#111"]}
          style={styles.gradientSection}
        >
          <Text style={styles.sectionHeading}>Why Choose Footsypop?</Text>

          <View style={styles.bulletRow}>
            <Ionicons name="sparkles" color="#f2f862" size={20} />
            <Text style={styles.bulletText}>
              Unmatched creativity and high-end production value.
            </Text>
          </View>

          <View style={styles.bulletRow}>
            <Ionicons name="people" color="#f2f862" size={20} />
            <Text style={styles.bulletText}>
              Experienced crew ensuring flawless coordination.
            </Text>
          </View>

          <View style={styles.bulletRow}>
            <Ionicons name="color-palette" color="#f2f862" size={20} />
            <Text style={styles.bulletText}>
              Custom themes and designs for every occasion.
            </Text>
          </View>

          <View style={styles.bulletRow}>
            <Ionicons name="time" color="#f2f862" size={20} />
            <Text style={styles.bulletText}>
              Timely planning and on-the-day management excellence.
            </Text>
          </View>
        </LinearGradient>

        {/* CTA Section */}
        <View style={styles.ctaContainer}>
          <Text style={styles.ctaText}>
            Ready to make your stage event unforgettable?
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

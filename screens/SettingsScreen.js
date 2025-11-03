import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Button, ActivityIndicator, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { signOut } from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const SettingsScreen = ({ navigation }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;
        if (!user) return;

        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          setUserData(userSnap.data());
        } else {
          // Fallback to Auth data if Firestore doc not found
          setUserData({
            firstName: user.displayName?.split(" ")[0] || "",
            lastName: user.displayName?.split(" ")[1] || "",
            email: user.email,
            phone: user.phoneNumber || "",
          });
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        Alert.alert("Error", "Failed to load user details.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      {/* Scrollable content */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* Profile Info */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>User Details</Text>

          <View style={styles.infoBox}>
            <View style={styles.infoItem}>
              <Text style={styles.label}>First Name</Text>
              <Text style={styles.value}>{userData?.firstName || "-"}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.label}>Last Name</Text>
              <Text style={styles.value}>{userData?.lastName || "-"}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.label}>Email</Text>
              <Text style={styles.value}>{userData?.email || "-"}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.label}>Phone</Text>
              <Text style={styles.value}>{userData?.phone || "-"}</Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.editButton}
            onPress={() => navigation.navigate("EditProfile")}
          >
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Additional Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          <TouchableOpacity style={styles.option}>
            <Ionicons name="notifications-outline" size={22} color="#ffffffff" />
            <Text style={styles.optionText}>Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Ionicons name="lock-closed-outline" size={22} color="#ffffffff" />
            <Text style={styles.optionText}>Change Password</Text>
          </TouchableOpacity>

          <View style={styles.option}>
            <Ionicons name="log-out-outline" size={22} color="red" />
            <Button title="Logout" color="red" onPress={() => signOut(auth)} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 50,
    paddingHorizontal: 16,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#000000ff",
    backgroundColor: "#000000ff",
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffffff",
  },
  content: {
    padding: 20,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    color: "#ffffffff",
  },
  infoBox: {
    backgroundColor: "#1a1a1a",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  infoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  label: {
    color: "#aaa",
    fontWeight: "500",
  },
  value: {
    color: "#fff",
    fontWeight: "400",
  },
  editButton: {
    marginTop: 15,
    backgroundColor: "#007bff",
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  editButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  optionText: {
    marginLeft: 12,
    fontSize: 16,
    color: "#ffffffff",
  },
});
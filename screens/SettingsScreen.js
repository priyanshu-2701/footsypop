import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { auth, db } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

const SettingsScreen = ({ navigation }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Function to fetch user data
  const loadUser = async () => {
    try {
      const user = auth.currentUser;
      if (!user) return;

      const ref = doc(db, "users", user.uid);
      const snap = await getDoc(ref);

      if (snap.exists()) {
        setUserData(snap.data());
      } else {
        setUserData({ email: user.email });
      }
    } catch (e) {
      console.log(e);
      Alert.alert("Error", "Failed to load user data.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Load user once when component mounts
  useEffect(() => {
    loadUser();
  }, []);

  // ✅ Auto-reload user data when screen is focused (after editing profile)
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      loadUser();
    });
    return unsubscribe;
  }, [navigation]);

  const handleLogout = () => {
    signOut(auth);
  };

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingVertical: 40 }}>
        {/* ✅ Profile Section */}
        <TouchableOpacity
          style={styles.profileSection}
          onPress={() => navigation.navigate("EditProfile")}
        >
          <Image
            source={{
              uri:
                userData?.profileImage ||
                "https://i.pravatar.cc/150?img=3",
            }}
            style={styles.avatar}
          />
          <View>
            {/* ✅ Show full updated name */}
            <Text style={styles.userName}>
              {userData?.name ||
                `${userData?.firstName || "Guest"} ${userData?.lastName || ""}`}
            </Text>
            <Text style={styles.editText}>Edit profile</Text>
          </View>
        </TouchableOpacity>

        {/* ✅ Menu Items */}
        <View style={styles.menuList}>
          <MenuItem icon="calendar-outline" text="Booking" onPress={() => navigation.navigate("SettingsDetails")} />
          <MenuItem icon="card-outline" text="Payment methods" onPress={() => navigation.navigate("PaymentMethods")} />
          <MenuItem icon="chatbubbles-outline" text="Get in Touch" onPress={() => navigation.navigate("Contact")} />
          <MenuItem icon="chatbox-ellipses-outline" text="Give us feedback" onPress={() => navigation.navigate("Feedback")} />
        </View>

        {/* ✅ Logout */}
        <View style={styles.logoutBox}>
          <TouchableOpacity style={styles.logoutRow} onPress={handleLogout}>
            <Ionicons name="log-out-outline" size={22} color="#080808ff" />
            <Text style={styles.logoutText}>Log out</Text>
          </TouchableOpacity>
        </View>

        {/* ✅ Footer */}
        <Text style={styles.versionText}>Version 1.0.2 (72)</Text>
        <Text style={styles.tosText}>Terms of Service</Text>
      </ScrollView>
    </View>
  );
};

const MenuItem = ({ icon, text, onPress }) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <Ionicons name={icon} size={22} color="#fff" />
    <Text style={styles.menuText}>{text}</Text>
    <Ionicons name="chevron-forward" size={20} color="#555" />
  </TouchableOpacity>
);

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  profileSection: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    marginBottom: 35,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 60,
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
    textAlign: "center",
  },
  editText: {
    color: "#888",
    textAlign: "center",
    marginTop: 5,
  },
  menuList: {
    borderTopWidth: 0.3,
    borderTopColor: "#222",
    paddingTop: 15,
    marginHorizontal: 15,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 0.3,
    borderBottomColor: "#222",
  },
  menuText: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
    color: "#fff",
  },
  logoutBox: {
    backgroundColor: "#f2f862",
    borderRadius: 90,
    paddingVertical: 14,
    paddingHorizontal: 18,
    marginHorizontal: 60,
    marginTop: 30,
  },
  logoutRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logoutText: {
    color: "#030303ff",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 6,
  },
  versionText: {
    color: "#555",
    fontSize: 12,
    textAlign: "center",
    marginTop: 30,
  },
  tosText: {
    color: "#777",
    fontSize: 12,
    textAlign: "center",
    marginTop: 4,
  },
});
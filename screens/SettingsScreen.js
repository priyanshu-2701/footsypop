import { View, Text, Button } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

export default function SettingsScreen() {
  return (
    <View style={{ flex:1, justifyContent:"center", alignItems:"center" }}>
      <Text>Settings ⚙️</Text>
      <Button title="Logout" onPress={() => signOut(auth)} />
    </View>
  );
}

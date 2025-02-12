import React, { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity, ImageBackground, Alert } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";

// Danh sách tài khoản cứng
const users = [  // Di chuyển vào trong component
  { email: "admin@gmail.com", password: "123456" },
  { email: "user@gmail.com", password: "password" },
];

const LoginPageAdmin = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureText, setSecureText] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Validate Email
  const validateEmail = (text) => {
    setEmail(text);
    if (text.trim() === "") {
      setEmailError("Email không được để trống.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)) {
      setEmailError("Email không hợp lệ.");
    } else {
      setEmailError("");
    }
  };

  // Validate Password
  const validatePassword = (text) => {
    setPassword(text);
    if (text.includes(" ")) {
      setPasswordError("Mật khẩu không được chứa khoảng trắng.");
    } else if (text.trim() === "") {
      setPasswordError("Mật khẩu không được để trống.");
    } else {
      setPasswordError("");
    }
  };

  // Xử lý đăng nhập
  const handleLogin = () => {
    const user = users.find(
      (u) => u.email.trim() === email.trim() && u.password === password
    );

    if (!user) {
      Alert.alert("Lỗi", "Email hoặc mật khẩu không đúng.");
      return;
    }

    Alert.alert("Thành công", "Đăng nhập thành công!", [
      { text: "OK", onPress: () => navigation.navigate("HomeScreen") },
    ]);
  };





  return (
    <ImageBackground source={require("../../../img/backround.jpg")} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.card}>
          {/* Logo */}
          <Image source={require("../../../img/logocoffee.png")} style={styles.logo} />

          {/* Chọn vai trò */}
          <View style={styles.roleContainer}>
            <TouchableOpacity>
              <Text style={styles.activeRole}>Chủ nhà hàng / Quản lý</Text>
            </TouchableOpacity>
          </View>

          {/* Input Email */}
          <TextInput
            label="Email"
            mode="outlined"
            keyboardType="email-address"
            left={<TextInput.Icon icon="email" />}
            value={email}
            onChangeText={validateEmail}
            onBlur={() => validateEmail(email)} // Hiển thị lỗi khi rời khỏi ô nhập
            style={styles.input}
            error={!!emailError}
          />
          {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

          {/* Input Password */}
          <TextInput
            label="Mật khẩu"
            mode="outlined"
            secureTextEntry={secureText}
            left={<TextInput.Icon icon="lock" />}
            right={<TextInput.Icon icon={secureText ? "eye-off" : "eye"} onPress={() => setSecureText(!secureText)} />}
            value={password}
            onChangeText={validatePassword}
            onBlur={() => validatePassword(password)} // Hiển thị lỗi khi rời khỏi ô nhập
            style={styles.input}
            error={!!passwordError}
          />
          {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

          {/* Nút Quên mật khẩu */}
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Quên mật khẩu?</Text>
          </TouchableOpacity>

          {/* Nút Đăng nhập */}
          <Button mode="contained" onPress={handleLogin} style={styles.loginButton}>
            Đăng nhập
          </Button>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1, resizeMode: "cover", width: "100%", height: "100%", position: "absolute" },
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  card: {
    width: "90%",
    maxWidth: 400,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    alignItems: "center",
  },
  logo: { width: 250, height: 150, resizeMode: "contain", marginBottom: 20 },
  input: { width: "100%", marginBottom: 10 },
  forgotPassword: { alignSelf: "flex-end", color: "#007bff", marginBottom: 20 },
  loginButton: { width: "100%", backgroundColor: "#007bff", paddingVertical: 8, borderRadius: 5 },
  errorText: { color: "red", alignSelf: "flex-start", marginBottom: 10 },
  roleContainer: {
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "center",
  },
  activeRole: {
    fontSize: 16,
    color: "#007bff",
    fontWeight: "bold",
    marginHorizontal: 10,
  },
});

export default LoginPageAdmin;

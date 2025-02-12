import React, { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity, ImageBackground, Alert } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native"; 

const users = [
  { email: "admin@gmail.com", password: "123456" },
  { email: "user@gmail.com", password: "password" },
];

const LoginPageAdmin = () => {
  const navigation = useNavigation(); 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureText, setSecureText] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

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

  const handleLogin = () => {
    console.log("Bắt đầu kiểm tra đăng nhập...");
    console.log("Email nhập vào:", email);
    console.log("Mật khẩu nhập vào:", password);

    const user = users.find(
      (u) => u.email.trim() === email.trim() && u.password === password
    );

    if (!user) {
      console.log("Đăng nhập thất bại: Sai email hoặc mật khẩu.");
      Alert.alert("Lỗi", "Email hoặc mật khẩu không đúng.");
      return;
    }

    console.log("Đăng nhập thành công!");
    console.log("Navigation object:", navigation);

    setTimeout(() => {
      navigation.navigate("Home"); // 👉 Chuyển trang sau khi đăng nhập
    }, 500);
  };

  return (
    <ImageBackground source={require("../../../img/backround.jpg")} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image source={require("../../../img/logocoffee.png")} style={styles.logo} />
          <View style={styles.roleContainer}>
            <TouchableOpacity>
              <Text style={styles.activeRole}>Chủ nhà hàng / Quản lý</Text>
            </TouchableOpacity>
          </View>

          <TextInput
            label="Email"
            mode="outlined"
            keyboardType="email-address"
            left={<TextInput.Icon icon="email" />}
            value={email}
            onChangeText={validateEmail}
            onBlur={() => validateEmail(email)}
            style={styles.input}
            error={!!emailError}
          />
          {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

          <TextInput
            label="Mật khẩu"
            mode="outlined"
            secureTextEntry={secureText}
            left={<TextInput.Icon icon="lock" />}
            right={<TextInput.Icon icon={secureText ? "eye-off" : "eye"} onPress={() => setSecureText(!secureText)} />}
            value={password}
            onChangeText={validatePassword}
            onBlur={() => validatePassword(password)}
            style={styles.input}
            error={!!passwordError}
          />
          {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Quên mật khẩu?</Text>
          </TouchableOpacity>

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

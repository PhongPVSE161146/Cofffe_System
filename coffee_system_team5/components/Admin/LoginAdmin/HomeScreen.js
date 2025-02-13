import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FooterMenu from '../../FooterMenu/FooterMenu';

const menuItems = [
    { name: 'Tổng quan', icon: 'home' },
    { name: 'Báo cáo', icon: 'chart-line' },
    { name: 'Hóa đơn', icon: 'file-invoice' },
    { name: 'Mặt hàng', icon: 'box-open' },
    { name: 'Nhân viên', icon: 'users' },
    { name: 'Khách hàng', icon: 'user-friends' },
    { name: 'Khuyến mãi', icon: 'tags' },
    { name: 'Kho hàng', icon: 'warehouse' },
    { name: 'Thiết lập nhà hàng', icon: 'cogs' },
];

// const Sidebar = ({ navigation }) => {
//     return (
//         <ScrollView style={styles.sidebar}>
//             <Image source={require("../../../img/logocoffee.png")} style={styles.logo} />
//             {menuItems.map((item, index) => (
//                 <TouchableOpacity
//                     key={index}
//                     style={[styles.menuItem, item.highlight && styles.activeItem, item.disabled && styles.disabledItem]}
//                     onPress={() => !item.disabled && navigation.navigate(item.name)}
//                 >
//                     <Icon name={item.icon} size={20} color={item.disabled ? '#999' : 'white'} style={styles.icon} />
//                     <Text style={[styles.menuText, item.disabled && styles.disabledText]}>{item.name}</Text>
//                 </TouchableOpacity>
//             ))}
//         </ScrollView>
//     );
// };

const HomeScreen = () => (
    <View style={{ flex: 1 }}>

        <View style={styles.screen}>

            <ScrollView style={styles.sidebar}>
                <Image source={require("../../../img/logocoffee.png")} style={styles.logo} />
                {menuItems.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[styles.menuItem, item.highlight && styles.activeItem, item.disabled && styles.disabledItem]}
                        onPress={() => !item.disabled && navigation.navigate(item.name)}
                    >
                        <Icon name={item.icon} size={20} color={item.disabled ? '#999' : 'white'} style={styles.icon} />
                        <Text style={[styles.menuText, item.disabled && styles.disabledText]}>{item.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <Text style={styles.bodytext}>Welcome to KOHI COFFEE!</Text>
        </View>

        <FooterMenu />
    </View>


);

// export default function App() {
//     return (
//         <NavigationContainer>

//         </NavigationContainer>
//     );
// }
export default HomeScreen;

const styles = StyleSheet.create({
    sidebar: { backgroundColor: '#0D2538', flex: 1, paddingVertical: 20, marginRight: 1498 },
    logo: { width: 250, height: 150, resizeMode: "contain", marginBottom: 20 },
    menuItem: { flexDirection: 'row', alignItems: 'center', padding: 15 },
    icon: { marginRight: 10 },
    menuText: { color: 'white', fontSize: 16 },
    activeItem: { backgroundColor: '#007BFF' },
    disabledItem: { opacity: 0.5 },
    disabledText: { color: '#999' },
    screen: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    bodytext: { fontSize: 40, color: '#007BFF' },
    navbar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15, backgroundColor: '#fff' },
    navbarTitle: { fontSize: 20, fontWeight: 'bold' },
    navbarIcons: { flexDirection: 'row', alignItems: 'center' },
    avatar: { width: 40, height: 40, borderRadius: 20, marginLeft: 10 },
});

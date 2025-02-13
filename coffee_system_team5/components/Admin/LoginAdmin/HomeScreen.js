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
    { name: 'Thiết lập nhà hàng', icon: 'cogs' }, // Đã bỏ comment
];

const HomeScreen = ({ navigation }) => (
    <View style={styles.container}>
        {/* Sidebar */}
        <View style={styles.sidebar}>
            <ScrollView contentContainerStyle={styles.sidebarContent}>
                <Image source={require("../../../img/logocoffee.png")} style={styles.logo} />
                {menuItems.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.menuItem}
                        onPress={() => navigation.navigate(item.name)}
                    >
                        <Icon name={item.icon} size={20} color="white" style={styles.icon} />
                        <Text style={styles.menuText}>{item.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>

        {/* Nội dung chính */}
        <View style={styles.mainContent}>
            <Text style={styles.bodyText}>Welcome to KOHI COFFEE!</Text>
        </View>

        {/* Footer Menu */}
        <FooterMenu />
    </View>
);

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

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row', // Bố cục ngang: Sidebar + Nội dung chính
    },
    sidebar: {
        width: 250, // Cố định chiều rộng Sidebar
        backgroundColor: '#0D2538',
        paddingVertical: 20,
    },
    sidebarContent: {
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 120,
        resizeMode: "contain",
        marginBottom: 20,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 20,
    },
    icon: {
        marginRight: 10,
    },
    menuText: {
        color: 'white',
        fontSize: 16,
    },
    mainContent: {
        flex: 1, // Chiếm hết phần còn lại của màn hình
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    bodyText: {
        fontSize: 40,
        color: '#007BFF',
    },
});

import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import './FooterMenu.css';  // import CSS file

const FooterMenu = ({ navigation }) => {
    const menuItems = [
        { name: 'Expresso', icon: 'coffee', route: 'ExpressoScreen' },
        { name: 'Americano', icon: 'coffee', route: 'AmericanoScreen' },
        { name: 'Latte', icon: 'coffee', route: 'LatteScreen' },
        { name: 'Cappuccino', icon: 'coffee', route: 'CappuccinoScreen' },
        { name: 'Mocha', icon: 'coffee', route: 'MochaScreen' }
    ];

    return (
        <div className="footermenu">
            {menuItems.map((item, index) => (
                <div key={index} className="menuItem" onClick={() => navigation.navigate(item.route)}>
                    <Icon name={item.icon} size={24} color="#fff" />
                    <span className="menuText">{item.name}</span>
                </div>
            ))}
        </div>
    );
};

export default FooterMenu;

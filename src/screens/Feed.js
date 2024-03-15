import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

export default function Feed() {
    // Dados fictícios de produtos
    const productsData = [
        { id: 1, title: 'Coturno Salto', price: 'R$ 39,99', image: require('../assets/bota.png') },
        { id: 2, title: 'Calça Skinny Rosa', price: 'R$ 29,99', image: require('../assets/calçarosa.png') },
        { id: 3, title: 'Camiseta Social Branca', price: 'R$56,00', image: require('../assets/camiseta.png') },
        { id: 4, title: 'Calça Jeans Strasse', price: 'R$54,00', image: require('../assets/jeans.png') },
        { id: 5, title: 'Mini Saia Jeans', price:'29,99', image:require('../assets/saiajeans.png') },
        {id:6, title: 'Mini saia Vermelha', price:'25,00', image:require('../assets/saiavermelha.png') },
        { id: 7, title: 'Sandalia Salto Rosa', price:'69,99', image:require('../assets/salto.png') },
        { id: 8, title: 'Sueter Rosa', price:'39,99', image:require('../assets/sueter.png')},
        { id: 9, title: 'Vestido Rosa', price:'29,99', image:require('../assets/vestido.png') },]
    const renderItem = ({ item }) => (
        <View style={styles.productContainer}>
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={productsData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.productList}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FBE5E7',
    },
    productList: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    productContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 10,
    },
    productImage: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    productTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    productPrice: {
        fontSize: 14,
        color: '#888',
        marginLeft: 10,
    },
});

import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, Text, ScrollView } from 'react-native';
import ImageCarousel from '../../components/ImageCarousel';
import DetailBox from '../../components/DetailBox';
import DetailProperties from '../../components/DetailProperties';
import CardButton from '../../components/CardButton';
import styles from './styles';

const ProductDetails = ({route}) => {
    const [product, setProduct] = useState();

    useEffect(() => {
        setProduct(route.params.product);
    },[])

    if (!product){
        return <ActivityIndicator color={"5D3EBD"} />
    }

    return ( 
        <View style={styles.container}>
            <ScrollView>
            <ImageCarousel images={product.images} />
            <DetailBox price={product.price} name={product.name} weight={product.weight} />
            <Text style={styles.detailsText}>Detaylar</Text>
            <DetailProperties />
            </ScrollView>
            <CardButton item={product} />
        </View>

    )
};

export default ProductDetails;
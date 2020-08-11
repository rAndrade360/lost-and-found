import React from 'react';
import { View, FlatList, Image, Text } from 'react-native';
import Colors from '../../constants/Colors';
import FloatButton from '../../components/FloatButton';

const data = [{
    _id: "5eb5ab593cadaa470c1dfa55",
    name: "Celular",
    discription: "Um celular bacana",
    thumbnail: "telas-1588964185299.png",
    user_id: {
        founds: [
            "5eb5b6c6a85ba84f0b62aec6"
        ],
        losts: [
            "5eb5bafd0a577d52760da99a"
        ],
        _id: "5eb597c341eebe3991bfe309",
        name: "Renan de Andrade",
        whatsapp: "+5598992198943",
        email: "r.andrade@acad.ifma.edu.br",
        createdAt: "2020-05-08T17:32:51.428Z",
        updatedAt: "2020-05-08T20:03:09.692Z",
        __v: 2
    },
    createdAt: "2020-05-08T18:56:25.535Z",
    updatedAt: "2020-05-08T18:56:25.535Z",
    __v: 0
}]

import {
    Container,
    ItemContainer,
    BottomContainer,
    UserInformationContainer,
    ItemInformationContainer,
    ImageItem,
    ImageUser,
    MoreText,
    ItemName,
    UserName
} from './styles';

const HomeFound = () => {

    const renderItem = ({ item }) => (
        <ItemContainer>
            <Text>{item.name}</Text>
        </ItemContainer>

        // <ItemContainer>
        //     <ImageItem source={{ uri: item.found_url }} />
        //     <ItemInformationContainer>
        //         <UserInformationContainer>
        //             {/* <ImageUser source={{ uri: item.user_id.thumbnail_url }} /> */}
        //             <UserName>{item.user_id.name}</UserName>
        //         </UserInformationContainer>
        //         <ItemName>{item.name}</ItemName>
        //         <BottomContainer>
        //             {console.log(item)}
        //             <MoreText>more</MoreText>
        //         </BottomContainer>
        //     </ItemInformationContainer>
        // </ItemContainer>
    )

    return (
        <Container>
            <FloatButton />
            <FlatList
                data={data}
                style={{ flex: 1 }}
                keyExtractor={item => item._id}
                renderItem={renderItem}
            />
        </Container>
    );
}



export default HomeFound;
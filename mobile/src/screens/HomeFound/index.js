import React from 'react';
import { View, FlatList, Image, Text } from 'react-native';
import Colors from '../../constants/Colors';
import FloatButton from '../../components/FloatButton';

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
    const data = [{
        found: {
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
        },
        tumbnail_url: "http://localhost:3333/files/telas-1588964185299.png"
      },
      {
        found: {
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
        },
        tumbnail_url: "http://localhost:3333/files/telas-1588964185299.png"
      },
    ]

    const renderItem = ({ item }) => {
        console.log(item)
        

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

    }

    return (
        <Container>
            <FloatButton />
            <FlatList
                data={data}
                // style={{ height: 100 }}
                keyExtractor={item => item.found._id}
                renderItem={({item}) => (
                    <ItemContainer>
            <ImageItem source={{ uri: "http://localhost:3333/files/telas-1588964185299.png" }} />
            <ItemInformationContainer>
                <UserInformationContainer>
                    {/* <ImageUser source={{ uri: item.user_id.thumbnail_url }} /> */}
                    <UserName>{item.found.user_id.name}</UserName>
                </UserInformationContainer>
                <ItemName>{item.found.name}</ItemName>
                <BottomContainer>
                    {console.log(item)}
                    <MoreText>more</MoreText>
                </BottomContainer>
            </ItemInformationContainer>
        </ItemContainer>
                )}
            />
        </Container>
    );
}



export default HomeFound;
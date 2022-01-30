import React, {useEffect, VFC} from 'react';
import {View, Text} from "react-native";
import tw from "tailwind-rn";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../types/types";
import {Button} from "react-native-elements";

type Props = NativeStackScreenProps<RootStackParamList, 'FlexBox'>

export const FlexBoxScreen: VFC<Props> = ({navigation}) => {
    useEffect(() => {
        console.log("mouted FlexBox")
        return () => {
            console.log("un-mouted FlexBox")
        }
    }, [])
    return (
        <View style={tw('flex-1 bg-gray-300 justify-center items-center')}>
            <Text>FlexBox</Text>
            <View>
                <Button title="Go to FlexBox"
                        onPress={() => navigation.navigate("Hello")}
                />
            </View>
        </View>
    )
}


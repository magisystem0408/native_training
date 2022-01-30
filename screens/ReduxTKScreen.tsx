import React, {useEffect, VFC} from 'react';
import tw from "tailwind-rn";
import {View, Text} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../types/types";
import {Button} from "react-native-elements";

type Props = NativeStackScreenProps<RootStackParamList, "ReduxTK">

export const ReduxTKScreen: VFC<Props> = ({navigation}) => {
    useEffect(() => {
        console.log("mouted ReduxTKScreen")
        return () => {
            console.log("un-mouted ReduxTKScreen")
        }
    }, [])
    return (
        <View style={tw('flex-1 bg-gray-300 justify-center items-center')}>
            <Text>Redux Tool Kit</Text>
            <View>
                <Button title="Go to FlexBox"
                        onPress={() => navigation.navigate("FlexBox")}
                />
            </View>
        </View>
    )
}
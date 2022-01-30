import React, {useEffect, VFC} from "react";
import {Text, View} from "react-native";
import tw from "tailwind-rn";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../types/types";
import {Button} from "react-native-elements";

type Props = NativeStackScreenProps<RootStackParamList, "Hello">

export const HelloScreen: VFC<Props> = ({navigation}) => {
    useEffect(() => {
        console.log("mouted hello!");
        return () => {
            console.log("un-mouted hello")
        }
    })
    return (
        <View style={tw('flex-1 bg-gray-300 justify-center items-center')}>
            <Text>Hello</Text>
            <View>
                {/*Root NavigatorのNameに該当する*/}
                <Button title="Go to FlexBox"
                        onPress={() => navigation.navigate("ReduxTK")}
                />
            </View>
        </View>
    )
}
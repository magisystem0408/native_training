import React, {useEffect, useState, VFC} from 'react';
import tw from "tailwind-rn";
import {View, Text} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../types/types";
import {FontAwesome} from "@expo/vector-icons"
import {Button, Input} from "react-native-elements";
import {useDispatch, useSelector} from "react-redux";
import {addByPayload, decreament, increament, selectCount} from "../slices/counterSlice";

type Props = NativeStackScreenProps<RootStackParamList, "ReduxTK">

export const ReduxTKScreen: VFC<Props> = ({navigation}) => {
    const [amount, setAmount] = useState("0")
    const count = useSelector(selectCount)
    const dispatch = useDispatch()
    const incrementAmount = Number(amount) || 0

    useEffect(() => {
        console.log("mouted ReduxTKScreen")
        return () => {
            console.log("un-mouted ReduxTKScreen")
        }
    }, [])
    return (
        <View style={tw('flex-1 bg-gray-300 justify-center items-center')}>
            <Text>Redux Tool Kit {count}</Text>
            <View>
                <Button title="Go to FlexBox"
                        onPress={() => navigation.navigate("FlexBox")}
                />
            </View>
            <View style={tw("my-1")}>
                <Button title="decreament" onPress={() => dispatch(decreament())}/>
            </View>

            <View style={tw("my-1")}>
                <Button title="increament" onPress={() => dispatch(increament())}/>
            </View>
            <Input placeholder="type add number"
                   leftIcon={<FontAwesome name="pencil"
                                          size={24} color="gray"/>}
                   value={amount}
                   onChangeText={(txt: string) => setAmount(txt)}
            />
            <View>
                <Button title="increament by amount"
                        onPress={() => {
                            dispatch(addByPayload(incrementAmount))
                            setAmount("0");
                        }}
                />
            </View>
        </View>
    )
}
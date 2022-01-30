import React, {useCallback, useEffect, useState, VFC} from "react";
import {Text, View} from "react-native";
import tw from "tailwind-rn";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../types/types";
import {FontAwesome} from "@expo/vector-icons"
import {Button, Input} from "react-native-elements";
import {Child} from "../components/Child";

type Props = NativeStackScreenProps<RootStackParamList, "Hello">

export const HelloScreen: VFC<Props> = ({navigation}) => {
    const [text, setText] = useState("")
    const [printText, setPrintText] = useState("")

    useEffect(() => {
        console.log("mouted hello!");
        return () => {
            console.log("un-mouted hello")
        }
    })


    const printMsg = useCallback(() => {
        console.log("hello")
    //第二引数にprintTextが変わった時に変化するようにしている
    }, [printText])

    return (
        <View style={tw('flex-1 bg-gray-300 justify-center items-center')}>
            <Text>Hello</Text>
            <View>
                {/*Root NavigatorのNameに該当する*/}
                <Button title="Go to FlexBox"
                        onPress={() => navigation.navigate("ReduxTK")}
                />
                <Input placeholder="type print text"

                       onChangeText={(txt) => setText(txt)}
                       leftIcon={<FontAwesome name="pencil" size={24} color="gray"
                                              value={text}
                       />}
                />
                <Text>{text}</Text>
                <Input placeholder="type print text"
                       onChangeText={(txt) => setPrintText(txt)}
                       leftIcon={<FontAwesome name="pencil" size={24} color="gray"
                                              value={printText}
                       />}
                />
                <Text>{printText}</Text>
            </View>
            <Child printMsg={printMsg}/>
        </View>
    )
}
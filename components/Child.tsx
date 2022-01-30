import {Button, Text, View} from "react-native";
import tw from "tailwind-rn";
import {memo, VFC} from "react";

type Props = {
    printMsg: () => void
}

const ChildMemo:VFC<Props> = ({printMsg}) => {
    return (
        <View>
            <Text style={tw("my-3")}>
                Child
            </Text>
            <Button title="print" onPress={printMsg}/>
        </View>
    )
}

// 再レンダリングを防ぐ
export const Child = memo(ChildMemo)
import { View, TouchableOpacity, Text } from "react-native";


export function Note() {

    return (
        <View className="w-full h-50 flex-row items-center justify-center bg-gray-200 p-4 border border-violet-400 rounded-md mt-6">
            <Text className="font-semibold text-base text-white ml-2 ">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
            </Text>
        </View>
    )
}
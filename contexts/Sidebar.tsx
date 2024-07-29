import { Text, View } from "react-native";
import tw from "twrnc";

export default function Sidebar(){
    return <View style={tw`w-[250px] h-full bg-[#0B1963] flex flex-col p-12`}>
        <Text style={tw`text-white text-[24px] italic`}>
            Magitrade
        </Text>
        <Text style={tw`text-white mt-24 text-[18px]`}>
            Dashboard
        </Text>
        <Text style={tw`text-white text-[18px] mt-12`}>
            Markets
        </Text>

    </View>
}
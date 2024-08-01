import { Pressable, View } from "react-native";
import tw from "twrnc";

export default function PortfolioBar({view, setView}: any){

    return <View style={tw`flex flex-row gap-[20px] mt-[12px] font-medium`}>
        <Pressable onPress={() => setView("1D")}>
            <View style={tw`rounded-lg flex w-[80px] h-[30px] justify-center items-center text-center ${view === "1D" ? "bg-blue-500 text-white" : "bg-white text-blue-500"}`}>1D</View>
        </Pressable>
        <Pressable onPress={() => setView("1W")}>
            <View style={tw`rounded-lg flex w-[80px] h-[30px] justify-center items-center  text-center ${view === "1W" ? "bg-blue-500 text-white" : "bg-white text-blue-500"}`}>1W</View>
        </Pressable>
    </View>
}
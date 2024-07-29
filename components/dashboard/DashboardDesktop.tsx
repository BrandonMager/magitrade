import { View } from "react-native";
import tw from "twrnc"
import PortfolioComponent from "./PortolioComponent";

export default function DashboardDesktopComponent(){
    return <View style={[tw`flex flex-col text-white w-full`, {height: "100vh"}]}>
        <View style={tw`flex flex-col mt-12 bg-slate-100 w-[700px] h-[300px] block text-black`}>
            <PortfolioComponent />
        </View>
    </View>   
}
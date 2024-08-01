import { View } from "react-native";
import tw from "twrnc"
import PortfolioComponent from "./PortolioComponent";

export default function DashboardDesktopComponent(){
    return <View style={[tw`flex-col bg-white w-full items-center flex-1`, {height: "100vh"}]}>
            <View style={tw`flex flex-col w-[750px] block h-[400px] mt-[50px]`}>
                <PortfolioComponent />
            </View>
    </View>   
}